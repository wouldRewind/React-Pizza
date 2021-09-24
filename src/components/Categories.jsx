import React,{useState} from 'react'



// class Categories extends React.Component {

//   state = {
//     activeItem: null
//   };

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index
//     })
//   }

//   render(){
//     const {items,onClickItem} = this.props;

//     return(
//       <div className="categories">
//                    <ul>
//                      <li className="active">Все</li>
//                      {items.map((name,index) => (
//                          <li className={this.state.activeItem === index ? "active" : null } onClick={() => 
//                           this.onSelectItem(index)} key={`${name}_${index}`}>{name}</li>
//                      ))}
//                    </ul>
//                  </div>
//     )

//   }
// }

function Categories({items,onClickItem}) {

    const [activeItem, setActiveItem] = useState(null)
    console.log(items);
    return (
        <div className="categories">
              <ul>
                <li className={activeItem == null ? "active": ''}>Все</li>
                {items.map((name,index) => (
                    <li
                    className={activeItem === index ? 'active' : ''} 
                    onClick={() => setActiveItem(index)} key={`${name}_${index}`}>{name}</li>
                ))}
              </ul>
            </div>
    )
}

export default Categories
