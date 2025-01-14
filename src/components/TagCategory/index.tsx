interface ITagCategoryProps {
  name: string;
  backgroundColor?: string;
}

function TagCategory({ name, backgroundColor }: ITagCategoryProps) {
  const classNames = `p-3 font-semibold text-base rounded-3xl text-black ${backgroundColor || 'bg-white'}`;

  return (
    <a href="#" className={classNames}>{name}</a>
  )
  }
  
export default TagCategory
  