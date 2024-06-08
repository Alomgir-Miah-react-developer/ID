


import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [data , setData] = useState([])



     useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
     } , [])
    
     console.log(data)

  return (
    <>



 <div className="allCard-flex flex-wrap gap-5 flex ">
   
   {
     data.map((item)=>{
       return(
         <div className=" w-[235px] h-[300px] bg-[#cafaff] rounded-[20px] p-5 flex items-center flex-col gap-5 hover:bg-red-300 ">
          <img className='W-[200PX] h-[100px] rounded-full overflow-hidden' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnl-0XQ0XD_5A3KS9Z7__oxthX340xG0x_fw&s" alt="profile-picture" />
       
        
        <div className="UsersText">
        <h2 className='text-xl font-semibold'>id: {item.id}</h2>
     <p className='text-xs font-bold'> Name: {item.name}</p>
     <h3 className='text-xs text-black'>Email: {item.email}</h3>
      </div>
     </div>
       )
     })
   }
   </div>

    </>
  )
}

export default App
