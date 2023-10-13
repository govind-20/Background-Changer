import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')
  

  return (
    <div class='main' style={{backgroundColor:color}}>
      <button className='bg-white' onClick={()=>setColor('white')}>white</button>
      <button className='bg-red' onClick={()=>setColor('Red')}>Red</button>
      <button className='bg-blue' onClick={()=>setColor('Blue')}>Blue</button>
      <button className='bg-green' onClick={()=>setColor('Green')}>Green</button>
      <button className='bg-yellow' onClick={()=>setColor('Yellow')}>Yellow</button>
      <button className='bg-pink text-pink-700' onClick={()=>setColor('Pink')}>Pink</button>
      </div>
  )
}

export default App
