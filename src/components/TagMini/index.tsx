interface ITagMiniProps {
  svg: string;
  label: string;
}

function TagMini({ svg, label }: ITagMiniProps) {
    return (
      <div className="flex items-center gap-2">
        <img className="w-4 h-4" src={svg}/>
        <span className="font-medium text-base">{label}</span>
      </div>
    )
  }
  
export default TagMini
  