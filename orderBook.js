const reconcileOrder = (existingBook, incomingOrder) => {

  let updatedBook = [...existingBook]
  let newOrder = { ...incomingOrder }

  if (updatedBook.length === 0) return [newOrder]

  for (let i = 0; i < updatedBook.length; i++) {
    if (isOrderMatch(updatedBook[i], newOrder)) {

      if (updatedBook[i].quantity > newOrder.quantity) {
        updatedBook[i].quantity -= newOrder.quantity
        if (updatedBook[i].quantity >= newOrder.quantity) {
          const tempOrder = updatedBook.splice(i, 1)
          updatedBook = updatedBook.concat(tempOrder)
        }

        return updatedBook.filter(order => order.quantity)
      } else {
        newOrder.quantity -= updatedBook[i].quantity
        updatedBook[i].quantity = 0
      }
    }
  }

  updatedBook.push(newOrder)

  return updatedBook.filter(order => order.quantity)

}

function isOrderMatch(existingOrder, newOrder) {
  if (existingOrder.type !== newOrder.type) {
    return newOrder.type === 'sell' ? existingOrder.price >= newOrder.price : existingOrder.price <= newOrder.price
  }
  return false
}

module.exports = reconcileOrder
