import axios from "axios";
import Proptypes from "prop-types";
import { useState } from "react";

function TodoCard({ task, completed, id, setUpdate }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:3310/api/todos/${id}`).then(() => {
      setUpdate(true);
    });
  };
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {};

  return (
    <div className="flex flex-row justify-around text-center capitalize py-6 bg-red-300 rounded border border-rose-900 mx-5 shadow-xl font-medium my-6">
      <div className="mx-6 text-xl text-gray-800 mt-1">{task}</div>
      {completed ? (
        <div className="text-green-900 text-lg">done 😎</div>
      ) : (
        <div className="text-red-900 text-lg"> to do🏄‍♂️ </div>
      )}
      <button
        id="delete"
        type="button"
        className="bg-slate-200 text-lg rounded-full border p-3 border-slate-600 shadow-xl hover:bg-slate-300 focus:bg-slate-500"
        onClick={handleEdit}
      >
        {" Edit Task "}
      </button>
      <button
        id="delete"
        type="button"
        className="bg-slate-200 text-lg w-8 rounded-full border ml-16 border-slate-600 shadow-xl hover:bg-slate-300 focus:bg-slate-500  "
        onClick={handleDelete}
      >
        x
      </button>
    </div>
  );
}
export default TodoCard;

TodoCard.propTypes = {
  setUpdate: Proptypes.func.isRequired,
};
