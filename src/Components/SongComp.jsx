import React, { useState } from "react";
import { addSongs, removeSongs } from "../store";
import { useDispatch, useSelector } from "react-redux";

const SongComp = () => {
  const [title, setTital] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTital(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSongs(title));
    setTital("");
  };
  const handleClick = (movie) => {
    dispatch(removeSongs(movie));
  };

  const SongsToShow = useSelector((state) => {
    return state.song;
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="">Add Songss</label>
          <input
            onChange={handleChange}
            className="border border-black p-3"
            type="text"
            value={title}
          />
        </div>
        <button
          className=" mt-3  p-2 border rounded-lg border-blue-700 bg-blue-500"
          type="submit"
        >
          Add It
        </button>
      </form>
      <div className="m-2">
        {SongsToShow.map((x, index) => {
          return (
            <div key={index} className="flex m-2 gap-5">
              <div className="border-b border-blue-300">{x}</div>
              <button
                onClick={() => handleClick(x)}
                className="bg-red-500 text-white rounded-sm p-2"
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SongComp;
