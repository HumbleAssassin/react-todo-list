import React, { Component } from "react"

export default class TodoList extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <>
            {this.props.items.forEach((item) => (
               <h1 key={item.id}>{item.id}</h1>
            ))}
         </>
      )
   }
}
