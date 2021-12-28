import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

export default class App extends Component {
   state = {
      items: [],
      item: "",
      id: 0,
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

      const newItem = {
         id: this.state.id !== 0 ? this.state.id : this.state.items.length + 1,
         title: this.state.item,
      }
      const updatedItems = [...this.state.items, newItem]
      this.setState({
         items: updatedItems,
         item: "",
         id: 0,
      })
   }

   clearList = () => {
      this.setState({
         items: [],
      })
   }

   handleDelete = (id) => {
      const filteredItems = this.state.items.filter((item) => item.id !== id)
      this.setState({
         items: filteredItems,
      })
   }

   handleEdit = (id) => {
      const selectedItem = this.state.items.find((item) => item.id === id)
      const filteredItems = this.state.items.filter((item) => item.id !== id)
      this.setState({
         items: filteredItems,
         item: selectedItem.title,
         id: selectedItem.id,
         editItem: true,
      })
   }

   render() {
      console.log(this.state.id)
      return (
         <div className="container">
            <div className="row">
               <div className="col-10 mx-auto col-md-8 mt-5">
                  <h3 className="text-uppercase text-center">todo input</h3>
                  <TodoInput
                     item={this.state.item}
                     handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                  />
                  <TodoList
                     items={this.state.items}
                     id={this.state.items.id}
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
