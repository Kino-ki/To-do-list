import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="md:bg-pastelgreen py-5">
      <Outlet />
    </div>
  );
}

export default App;
