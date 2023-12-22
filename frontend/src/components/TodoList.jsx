import { useEffect, useState } from "react";
import axios from "axios";
import TodoCard from "./TodoCard";
import AddTodo from "./addtodo";

export default function TodoList({ dbTodos }) {
  const todos = dbTodos;
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState(todos);

  useEffect(() => {
    if (update) {
      axios.get("http://localhost:3310/api/todos").then((res) => {
        setData(res.data);
        setUpdate(false);
      });
    }
    console.log(update);
  }, [update]);

  return (
    <div className="md:mx-28 bg-red-100 shadow-2xl rounded-2xl pb-4">
      <div className="text-center font-[Verdana] text-6xl font-medium py-16 text-[#7A995F]">
        Your Todo List
      </div>
      <AddTodo setUpdate={setUpdate} />
      {data.map((p) => (
        <TodoCard
          id={p.id}
          task={p.task}
          completed={p.completed}
          setUpdate={setUpdate}
          key={p.id}
        />
      ))}
    </div>
  );
}
