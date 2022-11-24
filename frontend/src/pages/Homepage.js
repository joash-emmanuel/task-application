import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Homepage = () => {
    return(
        <>
            <h1 className="my-6 text-5xl font-bold text-violet-800 text-center">Create New Todo</h1>
            <div className="w-2/3 m-auto">
                <TodoForm  task="create" buttonName="Create Todo"/>
            </div>
            <h1 className="mt-12 mb-6 text-4xl font-bold text-violet-800 text-center">Your Todos!</h1>
            <TodoList/>
        </>
    )
}

export default Homepage