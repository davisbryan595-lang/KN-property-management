export interface Order {
  id: string
  orderNumber: string
  date: string
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  items: {
    id: string
    name: string
    price: number
    quantity: number
  }[]
  customer: {
    name: string
    email: string
    phone: string
    address: string
  }
  estimatedDelivery: string
}

export const getOrders = (): Order[] => {
  if (typeof window === "undefined") return []
  const orders = localStorage.getItem("orders")
  return orders ? JSON.parse(orders) : []
}

export const createOrder = (orderData: Omit<Order, "id" | "orderNumber" | "date">): Order => {
  const order: Order = {
    ...orderData,
    id: `ord-${Date.now()}`,
    orderNumber: `KN${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
    date: new Date().toISOString(),
  }

  const orders = getOrders()
  orders.push(order)
  localStorage.setItem("orders", JSON.stringify(orders))

  return order
}
