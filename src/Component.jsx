import React from 'react'



const Component=(props)=>{
    
    return(
        <React.Fragment>
            <h1>{props.heading1} </h1>
    <h2>{props.heading2}</h2>
    <h3>{props.heading3}</h3>
        </React.Fragment>
    )
}

export default Component;