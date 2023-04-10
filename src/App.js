import { Route, Routes } from "react-router-dom";
import Shapes from "./Components/Shapes";
import Redux from "./Components/Redux";
import UseReducerPro from "./Components/UseReducerPro";

function App() {
  return (
    <div className="h-screen bg-neutral-950 text-white">
      {/* <div className='flex justify-center items-center h-96'>
        <div className='w-4/12 border rounded h-48 mt-10 flex flex-col items-center h-full bg-neutral-800'>
        <h1 className="text-xl font-bold">Parent sibling</h1>
        <h5 className="text-lg text-sky-600 font-bold">Output</h5>
        <span className="text-4xl font-bold">0</span>
        <div className="w-full flex justify-around items-center h-full gap-5">
        <button type="button" className="text-4xl font-bold border border-2 rounded w-3/12 active:scale-90 scale-100 ease-in-out duration-200">-</button>
        <span className="border w-6/12 h-10 rounded text-center text-2xl font-bold">0</span>
        <button type="button" className="text-4xl font-bold border border-2 rounded w-3/12 active:scale-90 scale-100 ease-in-out duration-200">+</button>
        </div>
        <div className="w-full flex justify-around items-center h-full gap-5">
        <button type="button" className="text-lg font-bold border border-2 rounded p-2 active:scale-90 scale-100 ease-in-out duration-200">Add Even</button>
        <button type="button" className="text-lg font-bold border border-2 rounded p-2 active:scale-90 scale-100 ease-in-out duration-200">Add Odd</button>
        <button type="button" className="text-lg font-bold border border-2 rounded p-2 active:scale-90 scale-100 ease-in-out duration-200">Reset</button>
        </div>
        </div>
      </div> */}
      <Routes>
        <Route element={<Shapes />} path="/1"></Route>
        <Route element={<Redux />} path="/2"></Route>
        <Route element={<UseReducerPro />} path="/3"></Route>
      </Routes>
    </div>
  );
}

export default App;
