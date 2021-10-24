import React,{useState} from 'react'
import PropTypes from "prop-types"

const Categories = React.memo(
  function Categories({activeCategory,items,onChangeCategory}) {
    return (
        <div className="categories">
              <ul>
                <li onClick={() => onChangeCategory(null)} className={activeCategory === null ? "active": ''}>Все</li>
                {items &&
                items.map((name,index) => ( 
                    <li
                    className={activeCategory === index ? 'active' : ''} 
                    onClick={() => onChangeCategory(index)} key={`${name}_${index}`}>{name}</li>
                ))}
              </ul>
            </div>
    )
}
)


Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeCategory: PropTypes.func.isRequired
}

Categories.defaultProps = {
  items: [],  
}




export default Categories
