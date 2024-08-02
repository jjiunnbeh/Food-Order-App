import { useState } from 'react'
import Header from './components/Header'


function App() {


  return (
    <>
      <Header />
      <div style={{ color: 'white' , fontSize: '2rem', textAlign: 'center'}}>OUR MENU</div>
      <hr style={{marginLeft: '5%', marginRight:' 5%', opacity: 0.8, borderColor: 'lightgray'}}/>
    </>
  )
}

export default App
