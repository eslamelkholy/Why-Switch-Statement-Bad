enum ORDER_STATUS {
  CHECKOUT = 'CHECKOUT',
  PAYMENT = 'PAYMENT',
  DELIVER = 'DELIVER',
}

class OrderData {
  public msg?: string;
  public action?: string;

  constructor(msg?: string, action?: string) {
    this.msg = msg;
    this.action = action;
  }
}

interface IOrder {
  getOrderData(): OrderData;
}

class Checkout implements IOrder {
  getOrderData(): OrderData {
    return new OrderData('Welcome USER', `${ORDER_STATUS.CHECKOUT} Action`);
  }
}

class Payment implements IOrder {
  getOrderData(): OrderData {
    return new OrderData('Welcome USER', `${ORDER_STATUS.PAYMENT} Action`);
  }
}

class Deliver implements IOrder {
  getOrderData(): OrderData {
    return new OrderData('Welcome', `${ORDER_STATUS.DELIVER} Action`);
  }
}

class OrderStrategy {
  public CHECKOUT: IOrder;
  public PAYMENT: IOrder;
  public DELIVER: IOrder;

  constructor() {
    this.CHECKOUT = new Checkout();
    this.PAYMENT = new Payment();
    this.DELIVER = new Deliver();
  }
}

function getOrderData(STATUS: ORDER_STATUS): OrderData {
  const orderStrategy = new OrderStrategy();

  return orderStrategy[STATUS].getOrderData();
}

console.log(getOrderData(ORDER_STATUS.PAYMENT));
