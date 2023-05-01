import MovieComp from "./Components/MovieComp";
import SongComp from "./Components/SongComp";
import { reset } from "./store";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(reset());
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <button
          onClick={handleClick}
          className="border border-purple-900 h-12 p-3 rounded-md bg-purple-500"
        >
          Remove All Data
        </button>
      </div>
      <div className="flex justify-center gap-6">
        <div>
          <MovieComp />
        </div>
        <div>
          <SongComp />
        </div>
      </div>
    </>
  );
}

export default App;
