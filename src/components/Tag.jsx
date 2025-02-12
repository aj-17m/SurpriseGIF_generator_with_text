import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("CAR");
  const { loading, gif, fetchData } = useGif(tag);

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-700 md:w-1/2 w-11/12 rounded-2xl shadow-xl border-2 border-gray-500 gap-y-6 mt-6 mx-auto py-6 px-4 transition-all duration-300">
      <h2 className="uppercase font-extrabold text-3xl text-white tracking-wide drop-shadow-md">
        Random <span className="text-yellow-300">{tag}</span> GIF
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt={`GIF of ${tag}`}
          className="rounded-lg shadow-md border-4 border-white w-[450px] transition-all duration-300 hover:scale-105"
        />
      )}

      <div className="flex flex-col items-center gap-y-4 w-full">
        {/* Input Field */}
        <input
          type="text"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          className="uppercase bg-white text-gray-700 w-10/12 rounded-lg font-semibold py-2 px-4 text-lg text-center border-2 border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
          placeholder="Enter a tag (e.g., cat, car, dance)"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              fetchData(tag);
            }
          }}
        />

        {/* Generate Button */}
        <button
          onClick={() => fetchData(tag)}
          className="uppercase bg-yellow-400 text-blue-900 font-bold py-2 px-6 text-lg rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:text-white">
          Generate GIF
        </button>
      </div>
    </div>
  );
};

export default Tag;
