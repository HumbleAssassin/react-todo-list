import React from "react"

function TodoItem(props) {
   const { title, handleDelete, handleEdit } = props
   return (
      <li className="list-group-item text-capitalize d-flex justify-content-between">
         {title}{" "}
         <span>
            <i
               className="fas fa-pencil-alt me-2 text-success"
               onClick={handleEdit}></i>
            <i
               className="fas fa-trash-alt text-danger"
               onClick={handleDelete}></i>
         </span>
      </li>
   )
}

export default TodoItem
