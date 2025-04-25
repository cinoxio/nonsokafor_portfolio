'use server';

import cloudinary from '@/lib/cloudinary';


export async function uploadToCloudinary(formData: FormData) {
  try {
    const file = formData.get("file") as File

    if (!file) {
      throw new Error("No file provided")
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer())

    // Upload to Cloudinary
    return new Promise<{ url: string; public_id: string }>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: 'wireframe_to_code',
                resource_type: 'image',
            },
            (error, result) => {
                if (error || !result) {
                    console.error('Cloudinary upload error:', error);
                    reject(new Error('Upload failed'));
                } else {
                    resolve({
                        url: result.secure_url,
                        public_id: result.public_id,
                    });
                }
            }
        );

        // / chinonso uploading in const uploadResponse = await cloudinary.uploader.upload(profilePic);
        // const updatedUser = await User.findByIdAndUpdate(
        //   userId,
        //   { profilePic: uploadResponse.secure_url },
        //   { new: true }
        // );

        // Write buffer to stream
        uploadStream.write(buffer);
        uploadStream.end();
    })
  } catch (error) {
    console.error("Error processing upload:", error)
    throw new Error("Failed to upload image")
  }
}

// export async function saveWireframeData(data: {
//   uid: string
//   description: string
//   imageUrl: string
//   model: string
//   email: string | undefined
// }) {
//   try {
//     Here you would implement your database saving logic
//     This is a placeholder for your existing logic

//     Example implementation:
//     const result = await db.wireframes.create({
//       data: {
//         uid: data.uid,
//         description: data.description,
//         imageUrl: data.imageUrl,
//         model: data.model,
//         email: data.email || 'anonymous',
//       }
//     });

//     For now, we'll just return success
//     return { success: true }

//     // If you need to check for credits or other conditions:
//     // if (insufficientCredits) {
//     //   return { error: 'Not enough credits' };
//     // }
//   } catch (error) {
//     console.error("Error saving wireframe data:", error)
//     return { error: "Failed to save data" }
//   }
// }







// export async function uploadToCloudinary(formData: FormData) {

//     try {
//         const imageUrl = formData.get('imageUrl') as File;

//         if (!imageUrl) {
//             return { error: 'No file provided' };
//         }
//         // Upload image to Cloudinary
//         const imageUrlString = URL.createObjectURL(imageUrl);
//         const uploadResponse = await cloudinary.uploader.upload(imageUrlString, {
//             folder: 'your_folder_name', // Optional
//             resource_type: 'image', // Optional
//         });

//         // Return the Cloudinary URL and other details
//         return {
//             url: uploadResponse.secure_url,
//             publicId: uploadResponse.public_id,
//             success: true,
//         };
//   console.log('Image uploaded successfully!', uploadResponse.secure_url);

//     } catch (error) {
//    console.error('Error uploading to Cloudinary:', error);
//    return { error: 'Failed to upload image', success: false };
//   }
// }
