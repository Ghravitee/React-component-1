import { React, useState } from 'react'
import './App.css'
import Ratings from './Ratings'
import data from './data'
import Feedback from './Feedback'

function App() {
  const [buttons, setButtons] = useState(data)

  const [redirect, setRedirect] = useState(true)


  function handleClick(id) {
    setButtons(prevState => {
      return prevState.map((button) => {
        return button.id === id ? {...button, on: !button.on } : button
      })
    })

  }

  function filter() {
    setButtons(prevArray => prevArray.filter((button) => button.on === true))
    console.log(buttons)
  }

  function nextPage() {
    setRedirect(prevState => !prevState)
  }


  const ratings = buttons.map(button => (
    <Ratings
      key={button.id}
      number={button.number}
      on={button.on}
      handleClick={() => handleClick(button.id)}

    />
  ))

  return (

    <div className='wrapper'>
      {
        redirect ?
          <div className="container">
            <div className="star">
              <img src="./images/icon-star.svg" alt="" className="star-img" />
            </div>
            <h1 className="heading">How did we do?</h1>
            <p className="paragraph">Please let us know how we did with your support request. All feedback is appreciated
              to help us improve our offering!</p>
            <div className="ratings">
              {ratings}
            </div>
            <a href="#" className='submit' onClick={() => { filter(); nextPage();}}>Submit</a>
          </div>
          :
          <Feedback
            key={buttons.id}
            buttons={buttons}
          />

      }
    </div>

  )
}

export default App
