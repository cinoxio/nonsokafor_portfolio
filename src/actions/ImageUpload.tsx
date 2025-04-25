"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CloudUpload, Loader2Icon, WandSparkles, X } from "lucide-react"
import Image from "next/image"
//@ts--error
import uuid4 from "uuid4"
import { type ChangeEvent, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import Constants from "@/data/Constants"
import { toast } from "sonner"
import { uploadToCloudinary} from "@/actions/upload-image"
import axios from 'axios'

function ImageUpload() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [model, setModel] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const OnImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const selectedFile = files[0]
      const imageUrl = URL.createObjectURL(selectedFile)
      setFile(selectedFile)
      setPreviewUrl(imageUrl)
    }
  }

  const OnConverToCodeButtonClick = async () => {
    if (!file || !model || !description) {
      toast("Please select all fields")
      return
    }

    setLoading(true)

    try {
      // Create FormData for the server action
      const formData = new FormData()
      formData.append("file", file)

      // Upload image using server action
      const uploadResult = await uploadToCloudinary(formData)
      console.log("Image uploaded to Cloudinary:", uploadResult.url)

     console.log(uploadResult);
      const uid = uuid4()

      // Save data using server action
     const result = await axios.post('/api/wireframe-to-code', {
        uid,
        description,
        imageUrl: uploadResult.url,
        model,
        // email: user?.email,
      })

      if (result.data.error) {
        console.log(result.data.error)
        toast(result.data.error)
        return
      }

      router.push("/view-code/" + uid)
    } catch (error) {
      console.error("Error in conversion process:", error)
      toast("Failed to process image")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {!previewUrl ? (
          <div
            className="p-7 border border-dashed rounded-md shadow-md
                    flex flex-col items-center justify-center"
          >
            <CloudUpload className="h-10 w-10 text-primary" />
            <h2 className="font-bold text-lg">Upload Image</h2>

            <p className="text-gray-400 mt-2">Click Button Select Wireframe Image </p>
            <div className="p-5 border border-dashed w-full flex mt-4 justify-center">
              <label htmlFor="imageSelect">
                <h2 className="p-2 bg-blue-100 font-bold text-primary rounded-md px-5 cursor-pointer">Select Image</h2>
              </label>
            </div>
            <input
              type="file"
              id="imageSelect"
              className="hidden"
              multiple={false}
              onChange={OnImageSelect}
              accept="image/*"
            />
          </div>
        ) : (
          <div className="p-5 border border-dashed relative">
            <Image
              src={previewUrl || "/placeholder.svg"}
              alt="preview"
              width={500}
              height={500}
              className="w-full h-[250px] object-contain"
            />
            <button aria-label="button upload image"
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
              onClick={() => {
                setPreviewUrl(null)
                setFile(null)
              }}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        <div className="p-7 border shadow-md rounded-lg">
          <h2 className="font-bold text-lg">Select AI Model</h2>
          <Select onValueChange={(value) => setModel(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select AI Model" />
            </SelectTrigger>
            <SelectContent>
              {Constants?.AiModelList.map((model, index) => (
                <SelectItem value={model.name} key={index}>
                  <div className="flex items-center gap-2">
                    <Image src={model.icon || "/placeholder.svg"} alt={model.name} width={25} height={25} />
                    <h2> {model.name}</h2>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <h2 className="font-bold text-lg mt-7">Enter Description about your webpage</h2>
          <Textarea
            onChange={(event) => setDescription(event?.target.value)}
            className="mt-3 h-[150px]"
            placeholder="Write about your web page"
          />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <Button onClick={OnConverToCodeButtonClick} disabled={loading} className="flex items-center gap-2">
          {loading ? <Loader2Icon className="animate-spin" /> : <WandSparkles />}
          <span>Convert to Code</span>
        </Button>
      </div>
    </div>
  )
}

export default ImageUpload;

