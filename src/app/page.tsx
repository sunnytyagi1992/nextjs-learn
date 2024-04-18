import { AddTodo } from "./Components/shared/AddTodo"


const Home = () => {
  return (

    <div className="bg-green-300 w-screen py-20 flex justify-center flex-col items-center">
        <span className="text-3xl font-extrabold uppercase">To-Do-App</span>
        <h1 className="text-3xl font-extrabold uppercase mb-5">Next.js 14.1
        <span className="text-orange-700 ml-2">Sever Actions</span>
        </h1>

        <div className="bg-red-300 text-black flex justify-center flex-col items-center s-[100px]"><AddTodo /></div>
    </div>

)
}
export default Home