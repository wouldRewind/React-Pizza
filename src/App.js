import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";
import {Header,Button,Categories,SortPopup} from "./components"
import {Cart, Home} from "./pages";
import { setPizzas } from "./redux/actions/pizzas";
import { connect } from "react-redux";
import store from "./redux/store";

function App(props) {


  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json")
    .then(({ data: {pizzas} }) => {
      props.setPizzas(pizzas)
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


const mapStateToProps = state => ({
  items: state.pizzas.items  
})

const mapDispatchToProps = {
  setPizzas
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
