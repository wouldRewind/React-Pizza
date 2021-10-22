import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Categories,PizzaBlock,SortPopup } from "../components"
import { setCategory } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

const categoryNames =  ['Мясные','Вегетарианская','Гриль','Острые','Закрытые','Мясные']
const sortItems = [{name: "популярности",type: 'popular'},{name: "цене",type: 'price'},{name: "алфавиту",type: 'alphabet'}]

function Home() {

  const { items } = useSelector(({ pizzas }) => pizzas)

  React.useEffect(() => {
    // Перенести в Redux и подключить redux-thunk
    // Следить за фильтрацией и сортирвокой и подставлять параметры из URL в Redux
    items.length && dispatch(fetchPizzas()) // идем за пиццами, только если они еще не пришли
  },[])

  // в родительском компоненте получаю, прокидываю через пропс в дочерние

  const dispatch = useDispatch() // хей, в этом компоненте я буду менять категорию в стейте!
  const {category: currentCategory} = useSelector(({ filters }) => filters) // достань как мне категорию (число)const {category: currentCategory} = useSelector(({ filters }) => filters) // достань как мне категорию (число)
  
  const onChangeCategory = React.useCallback(index => {
      dispatch(setCategory(index)) // index - пейлод
    },[])

    return (
        <div className="container">
          <div className="content__top">
            <Categories 
            onChangeCategory={onChangeCategory}
            items={categoryNames}/>
            <SortPopup items={sortItems}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              currentCategory === null ? items.map(obj => <PizzaBlock key={`${obj.id}_${obj.name}`} {...obj} />)
              : items.map(obj => currentCategory === obj.category && <PizzaBlock key={`${obj.id}_${obj.name}`} {...obj} />)
            }
          </div>
        </div>
    )
}

export default Home
