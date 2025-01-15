import DropdownsItem from "components/DropdownsItem"

interface IdropdownsList {
    categoryLabel: string,
    subCategories: string[]
}


function DropdownsList({categoryLabel, subCategories}: IdropdownsList) {
    return (
        <li className="group relative">
            <a href="#" className="category-icon">{categoryLabel}</a>
            <ul className="flex flex-col gap-3 p-5 bg-[#333] border border-gray-600 rounded-md absolute z-10 min-w-44 mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out before:absolute before:-inset-0 before:top-[-25px]">
                {
                    subCategories.map((subCategory, index) => (
                        <DropdownsItem key={index} label={subCategory}/>
                    ))
                }
            </ul>
        </li>
    )
  }
  
export default DropdownsList
  