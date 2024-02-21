import React from 'react'

const Header = (props, children) => {
  return (
   <>
   {children}
   <h1>{props.title}</h1>
   <p>{props.description}</p>
   this is header componets
   
   </>
  )
}

export {Header};
