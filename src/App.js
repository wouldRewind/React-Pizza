import axios from "axios";
import React from "react";
import { Route } from "react-router";
import {Header} from "./components"
import {Cart, Home} from "./pages";
import { setPizzas } from "./redux/actions/pizzas";
import { useDispatch } from "react-redux";

//
// useSelector вытаскивает данные из стейта. Благодаря нему я могу в любом месте вытащить стейт из редакса
// useDispatch возвращает диспач-функцию. Если ее вызвать и прокинуть action, мы поменяем стейт



function App() {

  const dispatch = useDispatch();
  
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json") // идем за пиццами
    .then(({ data: {pizzas} }) => {
      dispatch(setPizzas(pizzas));
    } )
  },[])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>
  )
}


export default App;

// логика прокидывания стейта в приложения без хуков(запарнее)
 
// const mapStateToProps = state => ({
//   ...state.pizzas // дропну полный стейт в приложении
// })

// const mapDispatchToProps = {
//   setPizzas
// }

// // mapStateToProps - прокидываем state как props
// // mapDispatchToProps - теперь диспач вызывается прямо из action

// export default connect(mapStateToProps,mapDispatchToProps)(App); // прокидываю Redux-стейт в App компонент
