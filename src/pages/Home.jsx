import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Categories,SortPopup,PizzaBlock, PizzaLoadingBlock } from "../components"
import { setCategory, setSortBY } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

const categoryNames =  ['Мясные','Вегетарианская','Гриль','Острые','Закрытые','Мясные']
const sortItems = [{name: "популярности",type: 'rating', order: 'desc'}
,{name: "цене",type: 'price', order: 'desc'},
{name: "алфавиту",type: 'name', order: 'asc'},]

function Home() {

  const { items } = useSelector(({ pizzas }) => pizzas)
  const { isLoaded } = useSelector(({ pizzas }) => pizzas)
  const { category, sortBy } = useSelector(({ filters }) => filters)


  React.useEffect(() => {
      dispatch(fetchPizzas(sortBy,category))
  },[category,sortBy])

  // в родительском компоненте получаю, прокидываю через пропс в дочерние

  const dispatch = useDispatch() // хей, в этом компоненте я буду менять категорию в стейте!
  
  const onChangeCategory = React.useCallback(index => {
      dispatch(setCategory(index)) // index - пейлод
    },[])

    const onSelectSortPopup = type => dispatch(setSortBY(type))

    return (
        <div className="container">
          <div className="content__top">
            <Categories 
            activeCategory={category  }
            onChangeCategory={onChangeCategory}
            items={categoryNames}/>
            <SortPopup activeSortType={sortBy.type} onClickSortType={onSelectSortPopup} items={sortItems}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoaded ? items.map(obj => <PizzaBlock  key={`${obj.id}_${obj.name}`} {...obj} />): 
              Array.from(Array(10),(item,index) => <PizzaLoadingBlock key={index}/>)
            }
          </div>
        </div>
    )
}

export default Home
