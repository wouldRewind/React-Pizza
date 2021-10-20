import React,{useState} from 'react'

function Categories({items,onChangeCategory}) {

    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = index => {
      setActiveItem(index)
      onChangeCategory(index)
    } 
    return (
        <div className="categories">
              <ul>
                <li onClick={() => onSelectItem(null)} className={activeItem === null ? "active": ''}>Все</li>
                {items &&
                items.map((name,index) => ( 
                    <li
                    className={activeItem === index ? 'active' : ''} 
                    onClick={() => onSelectItem(index)} key={`${name}_${index}`}>{name}</li>
                ))}
              </ul>
            </div>
    )
}

export default Categories
