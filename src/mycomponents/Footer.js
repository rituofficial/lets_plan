import React from 'react'

const Footer = () => {
  let footerStyle={
    position:"relative",
    top:"70vh",
    width:"100%",
    border:"2px solid red"


  }
  return (
    <footer className="bg-dark text-light py-10 
    style={footerStyle}">
      <p className="text-center">Copyright &copy; Lets_Plan.com</p>
    </footer>
  )
}

export default Footer
