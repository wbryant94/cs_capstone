import React from 'react'

const Country = (props) => { 
    return (
        <div style={{ fontSize: "24px", color: "purple"}}>
          <p>{props.name}</p>
        </div>
      );
}


export default Country; 
