import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client"
import Heading from "./components/Heading";
import Shoezilla from "./components/Shoezilla";

const NodeFetch=()=>{
    const [data,setData]=useState("")
    useEffect(()=>{
        fetch("http://localhost:3000/")
        .then((response)=> response.text())
        .then((res)=> setData(res))
    },[]);

    return(
        <h1>{data}</h1>
    )
}




const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<Shoezilla/>)
