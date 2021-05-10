import './App.css';
import React, { useEffect, useState } from 'react'
import { callNewquote } from './features/quoteSlice'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const quote = useSelector((state) => state.quote.quoteValue)
  const author = useSelector((state) => state.quote.quoteAuthor)
  const [color, setColor] = useState('red')
  const [animating, setAnimating] = useState(true);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(callNewquote())
  }, [dispatch])
  
  const newcolor = () => {
    let color = '#'
    color += Math.random().toString(16).slice(2, 8)
    setColor(color)
    console.log(color)
    setAnimating(true)
  }


  return (
    <div style={{ backgroundColor: `${color}` }} className="App h-screen flex flex-row justify-center items-center" >
      <span className="bg-green-50 rounded-lg shadow-lg h-auto w  w-2/5 p-10">
        <div className=' h-auto' >

          <h1 onAnimationEnd={() => setAnimating(false)} className={`${animating ? 'fade' : ''} flex font-serif text-4xl`}><img className='h-8 p-1 ' src="left-quote.png" />{quote} </h1>

          <p onAnimationEnd={() => setAnimating(false)} className={`${animating ? 'fade' : ''} font-light text-xl flex flex-row-reverse m-6 `}>~~{author}</p>
        </div>
        <div className="flex flex-row-reverse mt-6">
          <button style={{ backgroundColor: `${color}` }} className="btn shadow-md text-xl p-2 pl-4 pr-4 rounded-md focus:outline-none" onClick={() => {
            dispatch(callNewquote())
            newcolor()
          }}>
            New quote
          </button>
        </div>
      </span>
    </div>
  );
}

export default App;
