import CrossIcon from "./components/iconos/CrossIcons";
import MoonIcon from "./components/iconos/MoonIcon";

const App = () => {
  return (<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5rem]">Todo</h1>
        <button><MoonIcon/></button>
        </div>
      <form className="rounded-md bg-white overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
        <span className="inline-block rounded-full border-2 h-5 w-5"></span>
        <input className="w-full text-gray-400 outline-none" type="text" placeholder="create a new todo..." />
      
      </form>
    </header>
    <main className="container mx-auto px-4 mt-8 ">
      <div className="bg-white rounded-md ">
      <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
        <button className="inline-block rounded-full border-2 h-5 w-5 flex-none"></button>
        <p className="text-gray-600 grow">complete javascript course</p>
        <button className="flex-none"><CrossIcon/></button>
      </article>
      <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
        <button className="inline-block rounded-full border-2 h-5 w-5 flex-none"></button>
        <p className="text-gray-600 grow">complete javascript course</p>
        <button className="flex-none"><CrossIcon/></button>
      </article>
      <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
        <button className="inline-block rounded-full border-2 h-5 w-5 flex-none"></button>
        <p className="text-gray-600 grow">complete javascript course</p>
        <button className="flex-none"><CrossIcon/></button>
      </article>
      <section className="py-4 px-4 flex justify-between">
        <span className="text-gray-400">5 items left</span>
        <button className="text-gray-400">clear completed</button>
      </section>
      </div>
      

    </main>
    <section className="container mx-auto  mt-8 px-4">
      <div className="flex justify-center  rounded-md bg-white p-4 gap-4">
      <button className="text-blue-600">all</button>
      <button className="hover:text-blue-600">active</button>
      <button className="hover:text-blue-600">completed</button>

      </div>
      
      


   </section>
  <p className="text-center mt-8">drag and drop to reoder list</p>
  </div>)
}
export default App;