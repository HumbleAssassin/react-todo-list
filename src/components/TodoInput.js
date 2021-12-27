import React, { Component } from "react"

export default class TodoInput extends Component {
   render() {
      const { item, handleChange, handleSubmit, editItem } = this.props
      return (
         <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
               <div className="input-group">
                  <div className="input-group-text bg-primary text-white">
                     <span className="fas fa-book"></span>
                  </div>
                  <input
                     type="text"
                     className="form-control text-capitalize"
                     placeholder="add todo item"
                     value={item}
                     onChange={handleChange}
                  />
               </div>
               <div className="d-grid mt-3">
                  <button
                     type="submit"
                     className="btn btn-primary text-uppercase fw-bold">
                     add item
                  </button>
               </div>
            </form>
         </div>
      )
   }
}
