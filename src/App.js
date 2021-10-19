import axios from "axios";
import React from "react";
import { Route } from "react-router";
import {Header} from "./components"
import {Cart, Home} from "./pages";
import { setPizzas } from "./redux/actions/pizzas";
import { connect, useSelector,useDispatch } from "react-redux";

// useSelector вытаскивает данные из стейта
// useDispatch возвращает диспач-функцию. Если ее вызвать и прокинуть action, мы поменяем стейт



function App(props) {

  const dispatch = useDispatch();
  const storage = useSelector(state => state)
  console.log(storage)


  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json")
    .then(({ data: {pizzas} }) => {
      dispatch(setPizzas(pizzas))
    } )
  },[])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path="/" render={() => <Home items={props.items}/>}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>
  )
}


export default App;

// const mapStateToProps = state => ({
//   ...state.pizzas // дропну полный стейт в приложении
// })

// const mapDispatchToProps = {
//   setPizzas
// }

// // mapStateToProps - прокидываем state как props
// // mapDispatchToProps - теперь диспач вызывается прямо из action

// export default connect(mapStateToProps,mapDispatchToProps)(App); // прокидываю Redux-стейт в App компонент
