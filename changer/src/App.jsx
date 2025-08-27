import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-4">
        
        {/* Red Button Box */}
        <div className="shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
        </div>

        {/* Green Button Box */}
        <div className="shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>

        {/* Blue Button Box */}
        <div className="shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
        {/* black Button Box */}
        <div className="shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
        </div>
        {/* pink Button Box */}
        <div className="shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
