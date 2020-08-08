import React from 'react'
import CartDetails from '../../Data/CartDetails'
import List from './List'
import './ItemsList.css'
const ItemsList = ({ sendDetails }) => {
  const [data, setdata] = React.useState(CartDetails)

  const getState = (id, qty) => {
    console.log('asdas', id, qty)
    const dataCopy = [...data.Data]
    dataCopy.forEach(list => {
      if ((list.id = id)) {
        list.quantity = qty
      }
    })
    sendDetails(dataCopy)
  }

  return (
    <>
      <div className='ItemsList flex-jsc-aic'>
        <span className='ItemsList-item'> Items</span>
        <span className='List-qty'>Qty</span>
        <span className='List-price'>Price</span>
      </div>
      {data.Data.map((list, index) => {
        return (
          <React.Fragment key={list.id}>
            <List sendState={qty => getState(list.id, qty)} list={list}></List>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default ItemsList
