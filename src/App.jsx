
import Header from "./components/iconos/Header";
import TodoComputed from "./components/iconos/TodoComputed";
import TodoFilter from "./components/iconos/TodoFilter";
import TodoList from "./components/iconos/TodoList";
import TodoCreate from "./components/iconos/TodoCreate";
import { useState } from "react";

const initialStateTodos = [{ id: 1, title: "Read the book", completed: true},
  { id: 2, title: "Go to the gym", completed: false },
  { id: 3, title: "Pick up the dog", completed: false },
  {id:4,title:"Study",completed: false}]

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const  [filter, setFilter]  = useState('all');
  const changeFilter = (filter) => setFilter(filter);
  const filteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  return (<div className="  mt-8 max-h-[200px] overflow-auto bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
  <Header />
   <main className="container mx-auto px-4 mt-8 ">
    <TodoCreate createTodo = {createTodo} />
     <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />
     <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
     <TodoFilter changeFilter={changeFilter} filter={filter} />
     

   </main>
 <footer className="text-center mt-8 dark:text-gray-400">drag and drop to reader list</footer>
</div>)
    
  }




export default App;