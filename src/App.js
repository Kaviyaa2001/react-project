import React from "react";
// import PreviewArea from "./components/PreviewArea";
// import WorkArea from "./components/WorkArea";
// import OutputArea from "./components/OutputArea";
import PreviewArea from "./components/PreviewArea";
import InputArea from "./components/InputArea";
import WorkArea from "./components/WorkArea";
import DragAndDrop from "./components/DragAndDrop";

export default function App() {
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
       
        </div>
        {/* <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <InputArea />
        </div> */}
        {/* <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <Workspace />
        </div> */}
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
        <br />
        <br />
        <br />
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <DragAndDrop />
        </div>
      </div>
    </div>
  );
}