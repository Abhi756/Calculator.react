import React from 'react'
import  './calapp.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';



export default function App() {
    const [input,changeinput]=useState('');
    const handleclick = (e)=>{
          changeinput(input.concat(e.target.value));
    }
    const clear =()=>{
        changeinput('');
    }
    const equal =()=>{
      try{
        changeinput(eval(input).toString());
      }
      catch{
        changeinput("Error")
      }
       
    }
    const backspace =()=>{
       changeinput(input.slice(0,-1));
    }
  return (
    <>
      
      

    <div class="body">
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand" id="h">CALCULATOR</span>
        </div>
      </nav>
      
        
        <table>
          
          <tr>
            <textarea type="text" id="text" value={input}/>
            
          </tr>
          <tr>
            <td>
              <button className="per" value='%' onClick={handleclick}>%</button>
              <button className="per" onClick={clear}>CE</button>
              <button className="per" value='' onClick={backspace}>C</button>
              <button className="highlight" value="/" onClick={handleclick}>/</button>
              
            </td>
            
            
          </tr>
          <tr>
          <td>
              <button className="per" value='7' onClick={handleclick}>7</button>
              <button className="per" value='8' onClick={handleclick}>8</button>
              <button className="per" value='9' onClick={handleclick}>9</button>
              <button className="highlight" value='*' onClick={handleclick}>x</button>
              
            </td>
          </tr>
          <tr>
          <td>
              <button className="per" value='4' onClick={handleclick}>4</button>
              <button className="per"  value='5' onClick={handleclick}>5</button>
              <button className="per" value='6' onClick={handleclick}>6</button>
              <button className="highlight" value='-' onClick={handleclick}>-</button>
              
            </td>
          </tr>
          <tr>
          <td>
              <button className="per" value='1' onClick={handleclick}>1</button>
              <button className="per" value='2' onClick={handleclick}>2</button>
              <button className="per" value='3' onClick={handleclick}>3</button>
              <button className="highlight" value="+" onClick={handleclick}>+</button>
              
            </td>
          </tr>
          <tr>
          <td>
              <button className="per" value='' onClick={handleclick}>+/-</button>
              <button className="per" value='0' onClick={handleclick}>0</button>
              <button className="per" value='.' onClick={handleclick}>.</button>
              <button className="highlight" value='' onClick={equal}>=</button>
              
            </td>
          </tr>
        </table>
      </div>

    
    
    </>
  )
}





