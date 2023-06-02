import React from "react";
import CatSprite from "./CatSprite";
import Duck from "./Duck";


export default function PreviewArea() {
  return (
    <><div className="flex-none h-full overflow-y-auto p-2">

      </div><div>
              <CatSprite /> <Duck/>
              
          </div>
          </>
  );
}

