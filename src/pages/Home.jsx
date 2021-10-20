import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Categories,PizzaBlock,SortPopup} from "../components"
import { setCategory } from '../redux/actions/filters'
function Home() {
  // в родительском компоненте получаю, прокидываю через пропс в дочерние
  const { items } = useSelector(({ pizzas }) => pizzas)
  

  const dispatch = useDispatch() // хей, в этом компоненте я буду менять категорию в стейте!
  const {category: currentCategory} = useSelector(({ filters }) => filters) // достань как мне категорию (число)
  
  const onChangeCategory = index => {
    dispatch(setCategory(index)) // index - пейлод
  } 

    return (
        <div className="container">
          <div className="content__top">
            <Categories 
            onChangeCategory={onChangeCategory}
            items={['Мясные','Вегетарианская','Гриль','Острые','Закрытые','Мясные']}/>
            <SortPopup items={[{name: "популярности",type: 'popular'},{name: "цене",type: 'price'},{name: "алфавиту",type: 'alphabet'}]}/>
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
