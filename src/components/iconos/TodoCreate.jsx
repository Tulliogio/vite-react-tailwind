import { useState } from "react";

const TodoCreate = ({createTodo}) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!title.trim()) {
      
      return setTitle('');
    }
    createTodo(title);
    setTitle('');
    
  }
  return (<form onSubmit={handleSubmit} className="dark:bg-gray-800 rounded-md bg-white overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
     <span className="inline-block rounded-full border-2 h-5 w-5"></span>
    <input className="w-full text-gray-400 outline-none dark:bg-gray-800" type="text" placeholder="create a new todo..." value={title} onChange={(e) => setTitle(e.target.value)} />
   
   </form>)
}
export default TodoCreate;