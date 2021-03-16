import React, {useState} from 'react'
// import { Fade } from 'react-bootstrap'
import  {Slide} from 'react-reveal'

const C=()=>{
  const [email,setEmail] = useState('')
  const [password,setpassword] = useState('')
  const [allentry,setallEntry]=useState([])


  const newentry=(e)=>{
      const entry={id:new Date().toLocaleTimeString() , email,password}
      setallEntry([...allentry,entry])
    //   {email,password}=set
      // console.log(allentry);
    e.preventDefault()
    // setallEntry('')
    setEmail([])
    setpassword([])
    // console.log(entry)

  }
    return(
<>
<form action="">
   <div>
     {/* <input type='N /> */}
       <input type="text"
    //    value={email}
        name='email'
       onChange={(e)=>setEmail(e.target.value)}
      
     />
   </div>
   <input type="password" 
//    value={password}
        name='password'
   onChange={(e)=>setpassword(e.target.value)}
   />
   <button type="submit" onClick={newentry}>Submit</button>
   <button onClick={(e)=>{
          setEmail('')
          setpassword('')
          e.preventDefault()
         }}> Clear all</button>
</form>
    {allentry.map((cvalue)=>{
        return(
            <>
       <div  key={cvalue.id}>
         {/* console.log(); */}
        <p>{cvalue.email}</p>
        <p>{cvalue.password}</p>
        
           </div>
          



            </>
        )
})
    }
</>

)
    }
export default C;




