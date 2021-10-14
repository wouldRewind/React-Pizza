import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import {Header,Button,Categories,SortPopup} from "./components"
import {Cart, Home} from "./pages";








function App() {

  const [pizzas,setPizzas] = useState([])

  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
    .then(data => data.json())
    .then(json => setPizzas(json.pizzas))
  },[])


  // const [pizzas,setPizzas] = useState([]);

  // useEffect

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas}/>}/>
        <Route exact path="/cart" component={Cart}/>

      </div>
    </div>
  )
}

export default App;
