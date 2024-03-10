import { useEffect, useState } from "react"

const Shoezilla=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData=async ()=>{
        try {
            const result=await fetch("http://localhost:3000/myApi")
            console.log(result);
            const json=await result.json()
            setData(json)
         
           
        } catch (error) {
            console.log(error);
        }
    }

    if(data.length==0){
        return(
            <div>Loading...</div>
        )
    }

    return(
      
     <div>
          {console.log(data)}
        <ul>
        {data.map((data) =>(    
     
             <li className="prodName"  key={data._id.$oid} >{data.productName}
             <img className="pic" src={data.productImages[0].url} alt="" />
            </li>
        ))}
        </ul>
     </div>
    )
}

export default Shoezilla;