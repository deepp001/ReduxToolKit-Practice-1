import React, { useState } from "react";
import { addMovies, removeMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";

const MovieComp = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovies(title));
    setTitle("");
  };
  const MoviesToShow = useSelector((state) => {
    return state.movie;
  });
  const handleClick = (movie) => {
    dispatch(removeMovies(movie));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="">Add Movies</label>
          <input
            onChange={handleChange}
            className="border border-black p-3"
            type="text"
            value={title}
          />
        </div>
        <button
          className=" mt-3 p-2 border rounded-lg border-blue-700 bg-blue-500"
          type="submit"
        >
          Add It
        </button>
      </form>
      <div className="m-2">
        {MoviesToShow.map((x, index) => {
          return (
            <div key={index} className="flex gap-5 m-2">
              <div className="border-b  border-blue-300">{x}</div>
              <button
                onClick={() => handleClick(x)}
                className="bg-red-500 text-white p-2 rounded-sm"
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

export default MovieComp;
