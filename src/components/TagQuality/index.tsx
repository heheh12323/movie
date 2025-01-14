interface IQualityProps {
  quality: string
}

function TagQuality({ quality }: Readonly<IQualityProps>) {
    return (
      <div>{ quality }</div>
    )
  }
  
export default TagQuality
  