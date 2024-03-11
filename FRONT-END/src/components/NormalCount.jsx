import { useState } from "react"

const NormalCount=()=>{
    const [count,setCount] =useState(0)
    const [exited, setExited] = useState(false);
     
  
    function update(params) {
        if(params == 'add'){
            setCount(count + 1)
        }else if(params == 'sub'){
            setCount(count - 1)
        }else{
           setExited(true)
        }
      
    }

    if(exited){
        return(
            <div>EXITED
             <button onClick={()=> setExited(false)}>Go back</button>
            </div>
           
        )
    }
 
    return(
        <div className="countDiv">
            <button onClick={()=> update("sub") }> - </button>
            <p>count : {count}</p>
            <button onClick={()=> update("add") }> + </button>
            <button onClick={()=> update("exit") }> exit </button>

        </div>
    )
}

export default NormalCount;