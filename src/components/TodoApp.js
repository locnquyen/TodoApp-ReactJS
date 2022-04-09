import Header from './layout/Header';
import '../App.css'
import AddTodo from './AddTodo';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Todos from './Todos';



export default function TodoApp() {
    const [state, setState] = useState(
        [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    );

    const handleCheckboxChange = id => {
        setState(
            [...state.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })]
        )
    }

    const deleteTodo = id => {
        setState([
            ...state.filter(todo => todo.id !== id)
        ])
    }

    const addTodo = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        setState([
            ...state, newTodo
        ])
    }

    return (
        <div className="container">
            <h1>Hello form React React App</h1>
            <p>I am in a React Component</p>
            <Header />
            <AddTodo
                addTodo={addTodo}
            />
            <Todos
                todos={state}
                handleChange={handleCheckboxChange}
                deleteTodo={deleteTodo}
            />

        </div>
    )
}


// class TodoApp extends Component {
//     state = {
//         todos: [
//             {
//                 id: 1,
//                 title: "Setup development environment",
//                 completed: true
//             },
//             {
//                 id: 2,
//                 title: "Develop website and add content",
//                 completed: false
//             },
//             {
//                 id: 3,
//                 title: "Deploy to live server",
//                 completed: false
//             }
//         ]
//     }

//     handleCheckboxChange = id => {
//         this.setState({

//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id) todo.completed = !todo.completed;
//                 return todo;
//             })
//         })
//     }

//     deleteTodo = id => {
//         this.setState({
//             todos: [
//                 ...this.state.todos.filter(todo => {
//                     return todo.id !== id;
//                 })
//             ]
//         })
//     }

//     addTodo = title => {
//         const newTodo = {
//             id: uuidv4(),
//             title: title,
//             completed: false
//         };
//         this.setState({
//             todos: [...this.state.todos, newTodo]
//         })
//     }

//     addTodoFetch = title => {
//         const newTodo = {
//             id: uuidv4(),
//             title: title,
//             completed: false
//         };
//         axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
//             .then(response => {
//                 console.log(response.data);
//                 this.setState({
//                     todos: [...this.state.todos, newTodo]
//                 })
//             })
//         // this.setState({
//         //     todos:[...this.state.todos, newTodo]
//         // })
//     }

//     // componentDidMount() {
//     //     const config = {
//     //         params: {
//     //             _limit: 5
//     //         }
//     //     }
//     //     //tạo GET request để lấy danh sách todos
//     //     axios.get("https://jsonplaceholder.typicode.com/todos")
//     //         .then(response => this.setState({ todos: response.data }))
//     // }

//     // deleteTodoFetch = id =>{
//     //     axios.delete(`https://jsonplaceholder.typicode/todos/${id}`)
//     //     .then(response => this.setState({ todos: [
//     //         ...this.state.todos.filter(todo=>{return todo.id !== id;})
//     //     ] }))
//     // }

//     render() {
//         return (
//             <div className="container">
//                 <h1>Hello form React React App</h1>
//                 <p>I am in a React Component</p>
//                 <Header />
//                 <AddTodo
//                     addTodo={this.addTodo}
//                 />
//                 <Todos
//                     todos={this.state.todos}
//                     handleChange={this.handleCheckboxChange}
//                     deleteTodo={this.deleteTodo}
//                 />
//                 <Footer />
//             </div>
//         );
//     }
// }

// export default TodoApp;