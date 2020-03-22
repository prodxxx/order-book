

const reconcileOrder = (existingBook,incomingOrder) => {
  
  for (let i = 0; i < existingBook.length; i++) {
    if (incomingOrder.type !== existingBook[i].type) {
      if (existingBook[i].type === 'sell' && incomingOrder.price >= existingBook[i].price) {
        if (existingBook[i].quantity >= incomingOrder.quantity) {
          existingBook[i].quantity -= incomingOrder.quantity
          incomingOrder.quantity = 0
        }
        else {
          incomingOrder.quantity -= existingBook[i].quantity
          existingBook[i].quantity = 0
        }
      }
      else if (existingBook[i].type === 'buy' && incomingOrder.price <= existingBook[i].price) {
        if (existingBook[i].quantity >= incomingOrder.quantity) {
          existingBook[i].quantity -= incomingOrder.quantity
          incomingOrder.quantity = 0
        }
        else {
          incomingOrder.quantity -= existingBook[i].quantity
          existingBook[i].quantity = 0

        }
      }
    }
  }
  if (incomingOrder.quantity > 0) {
    existingBook.push(incomingOrder)
  }
  return existingBook
}



module.exports = reconcileOrder