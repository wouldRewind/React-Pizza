import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";
import {Header,Button,Categories,SortPopup} from "./components"
import {Cart, Home} from "./pages";




// class App extends React.Component {
//   render(){
//     return (
//       <div className="wrapper">
//         <Header/>
//         <div className="content">
//           <Route exact path="/" render={() => <Home items={pizzas}/>}/>
//           <Route exact path="/cart" component={Cart}/>
  
//         </div>
//       </div>
//     )
//   }
// }



function App() {

  const [pizzas,setPizzas] = useState([])

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json")
    .then(({ data }) => setPizzas(data.pizzas))
  },[])


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
