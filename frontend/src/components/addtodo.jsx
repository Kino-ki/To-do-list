import React, { useEffect, useState } from "react";
import axios from "axios";
import Proptypes from "prop-types";

function AddTodo({ setUpdate }) {
  // PREVENT DEFAULT
  const handleSubmit = (event) => event.preventDefault();

  // TASK, INPUT STATE
  const [task, settask] = useState("");

  const handleChange = (event) => {
    if (!event.target.value.includes("*")) {
      settask(event.target.value);
    }
  };

  // TO DO|| DONE, INPUT STATE

  const [taskState, setTaskState] = useState(null);
  const handleTaskState = (e) => {
    setTaskState(e.target.value);
  };
  // USEEFFECT TO SET A BOOLEAN VAR FOR THE DB
  const [state, setState] = useState(null);

  useEffect(() => {
    if (taskState !== null) {
      if (taskState === "done") {
        setState(1);
      } else {
        setState(0);
      }
    }
  }, [taskState]);
  // AXIOS POST
  const handleTaskSubmit = () => {
    if (task !== "" && state != null) {
      axios
        .post("http://localhost:3310/api/todos", {
          // eslint-disable-next-line object-shorthand
          task: task,
          completed: state,
        })
        .then(() => {
          setUpdate(true);
          settask("");
          setTaskState(null);
        });
    }
  };

  return (
    <div className=" bg-[#FCB587] p-6 flex flex-row justify-around mb-14 mx-3 rounded-xl shadow-lg border border-[#c29369]">
      <form
        className=" QuoteForm"
        onSubmit={handleSubmit}
        action="http://localhost:3310/api/todos/"
      >
        <select
          name="selectTaskState"
          className=" border border-slate-900 mr-5 rounded py-1 px-3 text-lg font-semibold"
          onChange={handleTaskState}
        >
          <option value="null"> --- </option>
          <option value="Todo"> To do</option>
          <option value="done">Done</option>
        </select>
        <input
          type="text"
          className="border border-slate-600 rounded px-7 py-1 font-extralight font-[Verdana]"
          value={task}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-slate-100 py-1 font-semibold hover:bg-slate-300 focus:bg-slate-500 rounded ml-5 px-3 border border-slate-800 "
          onClick={handleTaskSubmit}
        >
          Add a task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;

AddTodo.propTypes = {
  setUpdate: Proptypes.func.isRequired,
};
