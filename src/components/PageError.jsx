import React from 'react'
import './styles/PageError.css'

function PageError (props){
  const {error} = props
  return(
    <div className="pageError">
      ❌{error.message}❌
    </div>
  )
}

export default PageError;