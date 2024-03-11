import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client"
import TryOut from "./components/TryOut";
import Shoezilla from "./components/Shoezilla";
import Counter from "./components/Reducer";
import NormalCount from "./components/NormalCount";




const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<NormalCount/>)
