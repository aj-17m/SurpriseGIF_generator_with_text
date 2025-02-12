import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 items-center overflow-x-hidden py-10 px-4">
      {/* Title Section */}
      <h1 className="w-11/12 bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-lg text-center py-4 px-12 text-4xl font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105">
        🎉 Random GIFs Generator 🎭
      </h1>

      {/* GIF Components */}
      <div className="flex flex-col w-full items-center mt-10 gap-y-12">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
