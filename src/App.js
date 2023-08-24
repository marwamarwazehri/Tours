
import React,{useEffect, useState}from 'react';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {
const [loading,setisLoading]=useState(false);
const [data,setData]=useState([]);


  const fetchData = async () => {
    setisLoading(true)
    try {
      const response = await fetch(url)
      const Data = await response.json()
      setisLoading(false)
      setData(Data)
    } catch (error) {
     setisLoading(false)
      console.log(error)
    }
  }

useEffect(()=>{

fetchData();
},[])

const removeTour=(tourID)=>{
  const tour=data.filter((tour)=>tour.id!==tourID);
  setData(tour);
}

if (loading){
  return (<div className='loading'>
        <p>...Loading</p>
  </div>

  )
}
if(data.length===0){
   return <main >
    <div className='title'>
      <h1>No tour Left</h1>
    </div>
  <div className='button'>
  <button type='button' onClick={fetchData}>Refresh</button>
  </div>
  </main>
}

  return (
    <div className="House_container">
      <div className='House_container-inner'>
        <Tours data={data} removeTour={removeTour}/>
      </div>
      
    </div>
  );
}

export default App;
