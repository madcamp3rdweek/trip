import React, { useState, useEffect } from 'react';
import MapContainer from './MapContainer';

function LandingPage() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  useEffect(()=>{
      setPlace(InputText);
  },[InputText])

  

  const onChange = (e) => {
    setInputText(e.target.value)
  }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setPlace(InputText)
//     setInputText('')
//   }

  return (
    <>
        <input placeholder="Enter a Place" onChange={onChange} value={InputText} />
        <MapContainer searchPlace={Place} />
    </>
  )
}

export default LandingPage