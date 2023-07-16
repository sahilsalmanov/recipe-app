import React from 'react'
import "./PageLoader.css"

const PageLoader = () => {
  return (
    <div className='page_loader_wrapper'>
        <img src={require("../../Images/Logo.gif")} alt="loader" className='page__loader' />
    </div>
  )
}

export default PageLoader