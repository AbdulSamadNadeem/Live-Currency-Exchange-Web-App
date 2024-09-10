import React,{useState} from 'react'
import Flag from 'react-world-flags'
import './input.css'
import './Dropdown.css'
import {currencyCodes} from '../../utils/Constants/app'
import { currencyToCountry } from '../../utils/Constants/app'
const Input =()=>{
    const [inputvalue , setinputvalue] = useState()
    const [ basecountry , setCountry] = useState("USD")
    const [  targetCountry , setTargetCountry] = useState("PKR")
    const [  outputValue , setOutputCurrency] = useState("")
    const getInputValue =(e)=>{
         setinputvalue(e.target.value)   
    }

    const getCountry=(e)=>{
          setCountry(e.target.value)
    }

    const outputCountry=(e)=>{
        setTargetCountry(e.target.value)
    }



    const ConvertCurrency=()=>{
        let apikey = "9c78ac0ea4dec02eb01bf519"
        let Amount = inputvalue
        let baseCurrency = basecountry
        let targetCurrency = targetCountry
        fetch (`https://v6.exchangerate-api.com/v6/${apikey}/pair/${baseCurrency}/${targetCurrency}/${Amount}`)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            console.log(data.conversion_result)
            setOutputCurrency(data.conversion_result )
        })
        .catch((error)=>{
            console.log(error)
        })
    }
   

    return(
        <>
        <div className="inputContainer">
            <div className="heading">

                <h1>Convert Currency</h1>
                
            </div>
            <div className="table">
                <div className="baseCurrency">

                     <h3>Amount</h3>

                     <input value={inputvalue} onChange={getInputValue} placeholder='Enter Amount' type="number" />

                </div>

                <div className="targetCurrency">

                <h3>Converted Amount</h3>

                <input placeholder="Converted Amount" type="number" value={outputValue}  />

                </div>
               

             
            </div>
            <div className="selcet">
            <div className="dropdown">
            <div className="options">
                <label htmlFor="opt"><h3>Countries</h3></label>
                <select value={basecountry} onChange={getCountry} name="opt" id="">
                    {currencyCodes.map((currency)=>{
                        return(
                            <option key={currency} value={currency}>{currency} </option>
                        )
                    })}
                </select>

            </div>


           <div className="icon">
            <Flag code={currencyToCountry[basecountry]} alt={`${basecountry} flag`} />
           </div>
           
          </div>
          <div className="dropdown">
            <div className="options">
                <label htmlFor="opt"><h3>Countries</h3></label>
                <select value={targetCountry} onChange={outputCountry} name="opt" id="">
                    {currencyCodes.map((excahange)=>{
                        return(
                            <option key={excahange} value={excahange}>{excahange}</option>
                            
                        )
                    })}
                </select>

            </div>


           <div className="icon">
           <Flag code={currencyToCountry[targetCountry]} alt={`${targetCountry} flag`} />
           </div>
           
          </div>
            </div>
            <div className="button-wrapper">
              <button onClick={ConvertCurrency}>Convert</button>
              </div>
        </div>
        
        </>
    )
}
export default Input;