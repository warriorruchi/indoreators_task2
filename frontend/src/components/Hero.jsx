import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Hero = () => {
    const [msg, setMsg] = useState();
    const [note, setNote] = useState([]);
    const [onDelete, setOnDelete] = useState(false);
    const baseUrl = 'http://localhost:7000'

   //posting note
    const handleMsg = async (e) =>{
    console.log(process.env.REACT_BASEURL);
     const data ={
        note:msg
     }
     try{
    const response = await axios.post(`${baseUrl}/note/create`,data);
    setNote((prevNote)=>[...prevNote,response.data.data]);
     }catch(error){
        console.log(error);
     }
    
    }

    //deleting note
    const handleDelete = async (id) =>{
        try{
          await axios.delete(`${baseUrl}/note/delete/${id}`);
          setOnDelete(!onDelete)
        }catch(error){
            console.log(error);
        }
    }

    //fetching note
    const getData = async ()=>{
     try {  
        const notesResponse = await axios.get(`${baseUrl}/note/get`);
        setNote(notesResponse.data.data);
    }catch(error){
       console.log(error)
    }
    }
    useEffect(()=>{
    getData();
    },[onDelete]);

    
  return (
    <div className='container'>
      <input onChange={(e)=>setMsg(e.target.value)}/>
      <button onClick={handleMsg}>Create</button>
      {note.map(n=>(
     <div key={n.id} class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">

    <div class="card">
      <div class="card-body">
     
        <p class="card-text">{n.message}</p>
        <button  className="btn btn-danger" onClick={()=>handleDelete(n.id)}>Remove</button>
      </div>
    </div>
  </div>
  
  </div>
  ))}
</div>
  )
}

export default Hero
