import React from 'react'
import Quantity from './Quantity'
const INIT_QUANTITY = 1

const List = React.memo(({ list, sendState }) => {
  const { discount, id, price, img_url, name, type } = list
  let [quantity, setquantity] = React.useState(INIT_QUANTITY)

  const handleQuantity = e => {
    setquantity(e.target.value)
  }

  const addQuantity = () => {
    setquantity(quantity => quantity + 1)
  }

  const subQuantity = () => {
    setquantity(quantity => {
      if (quantity - 1 === 0) return quantity
      return quantity - 1
    })
  }

  React.useEffect(() => {
    sendState(quantity)
  }, [quantity])

  return (
    <>
      <div className='List-container flex-jsc-aic'>
        <span className='List-items'>
          <span className='flex-jsc-aic'>
            <img src={img_url}></img>
            <span className='List-items-name'>{name}</span>
          </span>
          <span className='List-items-cancel flex-jsc-aic'>&#10006;</span>
        </span>
        <span className='List-qty'>
          <Quantity
            add={addQuantity}
            sub={subQuantity}
            handleQuantity={handleQuantity}
            quantity={quantity}
          ></Quantity>
        </span>
        <span className='List-price'>${quantity * price}</span>
      </div>
    </>
  )
})

export default List
