import React, { useState } from 'react';
import MapContainer from './MapContainer';

function LandingPage() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input placeholder="Enter a Place" onChange={onChange} value={InputText} />
        <button type="submit">Search</button>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  )
}

export default LandingPage