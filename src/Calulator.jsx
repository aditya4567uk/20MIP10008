import React from "react";

function Calculator(){

    let arrnum = [];
    let ans =0;

    let appender =(e) =>{
        arrnum = [...arrnum, e.target.value];
    }

    let avgc = () =>{
        let sum =0;
        for(let i=0; i<arrnum.length; i++){
            sum = sum+arrnum[i];
        }

        ans = num/arrnum.length;
    }

    return(
        <>
        <div className="hhh">
            <h3 className="hhh">Type number to add in array , you can add numbers N times to calculate avg</h3>
            
        </div>
        <div className="hhhh"><input  type="number" onClick={(e)=>appender(e)} required/>
        <button className='btn' onClick={()=>avgc()}> Calculate</button></div>
        
        </>
    )
}

export default Calculator