import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

export default class App extends Component {
   render() {
      return (
         <>
            <div className="container">
               <div className="row">
                  <TodoInput />
                  <TodoList />
               </div>
            </div>
         </>
      )
   }
}
