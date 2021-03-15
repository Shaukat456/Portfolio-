import React, {useState} from 'react'
// import { Fade } from 'react-bootstrap'
import  {Slide} from 'react-reveal'

const C=()=>{
  const [email,setEmail] = useState('')
  const [password,setpassword] = useState('')
  const [allentry,setallEntry]=useState([])


  const newentry=(e)=>{
      const entry={email:email,password:password}
      setallEntry([...allentry,entry])
      console.log(allentry);
    e.preventDefault()
  }
    return(
<>
<form action="">
   <div>
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
</form>
    {allentry.map((cvalue)=>{
        return(
            <>
       <div>
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




