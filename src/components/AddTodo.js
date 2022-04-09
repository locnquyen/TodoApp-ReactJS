// import React, { Component } from 'react'

// export default class AddTodo extends Component {
//     state = {
//         title: ''
//     };

//     onInputChange = e => {
//         this.setState({ title: e.target.value });
//     }

//     addTodo = e =>{
//         e.preventDefault();
//         this.props.addTodo(this.state.title);
//         this.setState({ title:""})
//     }

//     render() {
//         return (
//             <form action="" onSubmit={this.addTodo} className="form-container">
//                 <input
//                     type="text"
//                     placeholder="Add todo..."
//                     className="input-text"
//                     value={this.state.title}
//                     onChange={this.onInputChange}
//                 />
//                 <input
//                     type="submit"
//                     value="Submit"
//                     className="input-submit"

//                 />
//             </form>
//         )
//     }
// }

import React, { useState } from "react"; 


function AddTodo(props) {

    const [title, setTitle] = useState("");

    const onInputChange = e => {
        setTitle(e.target.value)
    };

    const addTodo = e => {
        e.preventDefault(); props.addTodo(title); 
        setTitle("");
    };

    return (
        <form className="form-container" onSubmit={addTodo}>
            <input
                type="text" placeholder="Add Todo..." className="input-text" value={title} onChange={onInputChange}
            /> <input
                type="submit" value="Submit"
                className="input-submit" />
        </form>
    );
}
export default AddTodo;
