export interface OrderItems {
  id: number;
  quantity: number;
  unitPrice: number;
  ordersId: number;
  productsId: number;
}

export interface Orders {
  id: number;
  paymentId: string;
  merchanOrderId: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  statusId: number;
}
