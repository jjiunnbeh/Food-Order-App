import { useState } from 'react'
import Header from './components/Header'


function App() {


  return (
    <>
      <Header />
      <div style={{ color: 'white' , fontSize: '3rem', textAlign: 'center'}}>OUR MENU</div>
      <hr style={{marginLeft: '5%', marginRight:' 5%', opacity: 0.5, borderColor: 'lightgray'}}/>
    </>
  )
}

export default App
