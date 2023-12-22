import { useLoaderData } from "react-router-dom";
import TodoList from "../components/TodoList";

export default function TodoPage() {
  const todos = useLoaderData();

  return (
    <div>
      <div>{todos && <TodoList dbTodos={todos} />}</div>
    </div>
  );
}
