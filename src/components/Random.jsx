import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-green-400 to-green-600 md:w-1/2 w-11/12 rounded-2xl shadow-lg border-2 border-gray-500 gap-y-6 mt-6 mx-auto py-6 px-4 transition-all duration-300">
      <h2 className="uppercase font-extrabold text-3xl text-white tracking-wide drop-shadow-md">
        Random GIF Generator
      </h2>
      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt="Random GIF"
          className="rounded-lg shadow-md border-4 border-white w-[400px] transition-all duration-300 hover:scale-105"
        />
      )}
      <button
        onClick={fetchData}
        className="uppercase bg-white text-green-600 font-bold py-2 px-6 text-lg rounded-lg shadow-md transition-all duration-300 hover:bg-green-700 hover:text-white hover:scale-105">
        Generate New GIF
      </button>
    </div>
  );
};

export default Random;
