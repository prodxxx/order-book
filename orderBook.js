

const reconcileOrder = (existingBook,incomingOrder) => {
  
  let updatedBook = []

  for (let i = 0; i < existingBook.length; i++) {
    if (incomingOrder.type !== existingBook[i].type) {
      if (existingBook[i].type === 'sell' && incomingOrder.price >= existingBook[i].price) {
        if (existingBook[i].quantity >= incomingOrder.quantity) {
          existingBook[i].quantity -= incomingOrder.quantity
          incomingOrder.quantity = 0
        }
        else {
          incomingOrder.quantity -= existingBook[i].quantity
          existingBook.slice[i]
          updatedBook.push(existingBook)
        }
      }
      else if (existingBook[i].type === 'buy' && incomingOrder.price <= existingBook[i].price) {
        if (existingBook[i].quantity >= incomingOrder.quantity) {
          existingBook[i].quantity -= incomingOrder.quantity
          incomingOrder.quantity = 0
        }
        else {
          incomingOrder.quantity -= existingBook[i].quantity
          existingBook.slice[i]
          updatedBook.push(existingBook)

        }
      }
    }
  }
  if (incomingOrder.quantity > 0) {
    updatedBook.push(incomingOrder)
  }
  

  console.log(updatedBook)
  return updatedBook
}



module.exports = reconcileOrder