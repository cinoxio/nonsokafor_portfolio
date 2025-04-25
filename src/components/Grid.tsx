import Image from "next/image"
type grid = {
  url:string,
  title:string,
  className?:string
}

const Grid = ({url, title,className}:grid) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={url} fill alt={title} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover brightness-75 object-center filter grayscale hover:filter-none hover:scale-105 transition-all duration-200 ease-out"/>
    </div>
  )
}

export default Grid