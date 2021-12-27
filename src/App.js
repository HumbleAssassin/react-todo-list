import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

export default class App extends Component {
   state = {
      items: [
         {
            id: 1,
            title: "wake up",
         },
         {
            id: 2,
            title: "make breakfast",
         },
      ],
      item: "",
      editItem: false,
   }

   handleChange = (e) => {
      console.log("handleChange")
   }

   handleSubmit = (e) => {
      console.log("handle submit")
   }

   clearList = () => {
      console.log("clear list")
   }

   handleDelete = (id) => {
      console.log(`handle edit ${id}`)
   }

   handleEdit = (id) => {
      console.log(`handle Edit ${id}`)
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-10 mx-auto col-md-8 mt-5">
                  <h3 className="text-uppercase text-center">todo input</h3>
                  <TodoInput
                     item={this.state.item}
                     handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                     editItem={this.state.editItem}
                  />
                  <TodoList
                     items={this.state.items}
                     clearList={this.clearList}
                     handleDelete={this.handleDelete}
                     handleEdit={this.handleEdit}
                  />
               </div>
            </div>
         </div>
      )
   }
}
