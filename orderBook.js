

const reconcileOrder = (existingBook,incomingOrder) => {
  
  let updatedBook = []
  for (let i = 0; i < existingBook.length; i++){
    updatedBook.push(existingBook[i])
  }

  if (existingBook.length === 0) {
    updatedBook.push(incomingOrder)
  }

  for (let i = 0; i < existingBook.length; i++) {
    if (incomingOrder.type !== existingBook[i].type) {
      if (incomingOrder.price === existingBook[i].price) {
        if (existingBook[i].quantity === incomingOrder.quantity) {
          existingBook[i].quantity -= incomingOrder.quantity
          incomingOrder.quantity = 0
          updatedBook.splice(i, 1)
          break
        }
        else {
          incomingOrder.quantity -= existingBook[i].quantity
          existingBook.splice(i,1)
          updatedBook.push(existingBook[i])
        } 
      } else {
        updatedBook.push(incomingOrder)
      }
      
    } else if (existingBook[i].type === incomingOrder.type) {
      updatedBook.push(incomingOrder)
    }
  }
  
  return updatedBook
}



module.exports = reconcileOrder