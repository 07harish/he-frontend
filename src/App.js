import React from 'react'
import './App.css'
import ItemsList from './Components/ItemsList/ItemsList'
import OrderTotal from './Components/OrderTotal/OrderTotal'

function App () {
  const [totalDetails, settotalDetails] = React.useState(null)

  const getDetails = details => {
    settotalDetails(details)
  }

  return (
    <div className='App'>
      <div>&#60; Order Details</div>
      <div className='App-Conatiner'>
        <div className='App-itemsList'>
          <ItemsList sendDetails={getDetails}></ItemsList>
        </div>
        <div className='App-totalDetails'>
          <OrderTotal totalDetails={totalDetails}></OrderTotal>
        </div>
      </div>
    </div>
  )
}

export default App
