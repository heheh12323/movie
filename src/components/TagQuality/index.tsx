interface IQualityProps {
  quality: string
}

function TagQuality({ quality }: Readonly<IQualityProps>) {
    return (
      <div className="bg-[#FF0000] px-1 rounded">
        { quality }
      </div>
    )
  }
  
export default TagQuality
  