import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'

const Search = ({getSearchData}) => {
    const [searchValue, setsearchValue] = useState("")
    const [searchResult, setsearchResult] = useState([])
    const searchData = async ()=>{
        try {
            const {data} =await axios.get(`/cities?minPopulation=1000000&namePrefix=${searchValue}`)
        setsearchResult(data.data)
        } catch (error) {
            console.log("error:"+error)
        }
      }

      const handleDataClick =(city,regionCode,latitude,longitude)=>{
        // console.log(city+" "+regionCode +" "+latitude+" "+longitude)
        getSearchData({city:city,regionCode:regionCode,latitude:latitude,longitude:longitude})
        setsearchValue("")
      }
      // console.log(searchResult)
      useEffect(()=>{
        searchData()
      },[searchValue])
  return (
    <div className='w-screen  p-10 flex justify-center gap-7 relative'>
        <input value={searchValue} onChange={(e)=>setsearchValue(e.target.value)} className='w-[80%] lg:w-1/2 px-3 py-2 outline-none border-none rounded' type="text" placeholder='Search Your City  '/>
        
        {<div className='w-[50%] lg:w-[40%] absolute rounded max-h-[210%] lg:left-[30%] top-[67%]  bg-white  overflow-y-auto'> 
        {searchValue.length>0 && searchResult.map((value,index)=>{
           return  <div key={index} className='flex hover:bg-slate-500 hover:text-white duration-300 border-b-2 border-slate-700 cursor-pointer p-4' onClick={()=>handleDataClick(value.city,value.regionCode,value.latitude,value.longitude)}>
                <h1>{value.city},</h1>
                <h1>{value.regionCode}</h1>
            </div>
        })}
        </div>}
    </div>
  )
}

export default Search