interface IDropdownsItem {
    label: string
}

function DropdownsItem({label}: IDropdownsItem) {
    return (
    <li className="hover:text-blue-500 transform hover:scale-105 transition-transform duration-300 ease-in-out z-10">{label}</li>
    )
  }
  
export default DropdownsItem
  