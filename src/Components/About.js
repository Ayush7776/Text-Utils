// import React, { useState } from 'react'

export default function About(props) {
  // const [mystyle, setMystyle] = useState({
  //   backgroundColor: 'white',
  //   color: 'black'
  // })
  // const [text,setText]=useState("Enable Dark Mode")

  // const toogleStyle = () => {
  //   if (mystyle.backgroundColor === "black") {
  //     setMystyle({
  //       backgroundColor: 'white',
  //       color: 'black',
  //     })
  //     setText("Enable Dark Mode");
  //   }
  //   else{
  //       setMystyle({
  //       backgroundColor: 'black',
  //       color: 'white'
  //     })
  //     setText("Enable Light Mode");
  //   }
  // }

  return (
    <>
      <div className="px-4 py-5 my-5 text-center" style={props.style}>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="57" fill="currentColor" className="bi bi-amd" viewBox="0 0 16 16">
          <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z" />
        </svg>
        <h1 className="display-5 fw-bold">Text-Utils</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Contact Us</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}
