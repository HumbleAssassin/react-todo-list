import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

export default class App extends Component {
   state = {
      items: [],
      item: "",
      editItem: false,
   }

   handleChange = (e) => {
      const { value } = e.target
      this.setState({
         item: value,
      })
   }

   handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state.items.length)
      const newItem = {
         id: this.state.items.length + 1,
         title: this.state.item,
      }
      const updatedItems = [...this.state.items, newItem]
      this.setState(
         {
            items: updatedItems,
            item: "",
         },
         console.log(this.state.items)
      )
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
      console.log(this.state)
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
