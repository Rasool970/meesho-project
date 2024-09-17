import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function Rating() {
    let[rating,setRating]=useState()
    let [color,setColor]=useState()
  return (
    <div>
        {[...Array(5)].map((star,index)=>{
            let currentrate=index+1
            return(
                <>
                <label>
                <span  value={currentrate} onClick={()=>setRating(currentrate)}
                color={currentrate<=(color||rating)?'green':''}> <FaStar size={20}/></span>
                </label>
                
                
                
                </>

            )
        })}




    </div>
  )
}

export default Rating