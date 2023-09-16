import React,{useState}from "react";

const Calculator=()=>{
    
    const [input1,setinput1]=useState("")
    const [input2,setinput2]=useState("")
    const [result,setresult]=useState(null)
    const [error,seterror]=useState(null)
    console.log("result",result)

    const validateInput=()=>{
        if(input1===""||input2===""||isNaN(input1)||isNaN(input2)){
            seterror("please enter valid Input")
            return false
        }
        seterror(null)
        return true
    }
    const sum=()=>{
        if(validateInput()){
            // we use pase float becoz input is in the form of string
        setresult(parseFloat(input1)+parseFloat(input2))
        }
    }
    const subtract=()=>{
        if(validateInput()){
           
        setresult(parseFloat(input1)-parseFloat(input2))
        }
    }
    const multiply=()=>{
        if(validateInput()){
           
        setresult(parseFloat(input1)*parseFloat(input2))
        }
    }
    const divide=()=>{
        if(validateInput()){

            if(input2!=="0"){
        setresult(parseFloat(input1)/parseFloat(input2))
            }else{
                seterror("division by zero is not possible")
            }
        }
    }
    return(
        <div class="calculator">
            <h3>React Calculator</h3>
            <input type="text"  value={input1} onChange={e=>setinput1(e.target.value)} placeholder="num1"/><br/>
            <input type="text"  value={input2} onChange={e=>setinput2(e.target.value)} placeholder="num2"/>
            
           <div>
           <button onClick={sum}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
           </div>
           {error&&<div className="err">{error}</div>}
           {result&&<div className="Success">Result:{result}</div>}
        </div>
    )

    
}
export default Calculator