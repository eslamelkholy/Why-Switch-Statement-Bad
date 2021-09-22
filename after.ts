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
  public orderProcessors: Map<string, IOrder>;

  constructor() {
    this.orderProcessors = this.getStrategies();
  }

  getStrategies(): Map<string, IOrder> {
    const processors = new Map();
    processors.set(ORDER_STATUS.CHECKOUT, new Checkout());
    processors.set(ORDER_STATUS.PAYMENT, new Payment());
    processors.set(ORDER_STATUS.DELIVER, new Deliver());
    return processors;
  }
}

function getOrderData(STATUS: string): OrderData {
  const orderStrategy = new OrderStrategy();

  return orderStrategy.orderProcessors.get(STATUS)?.getOrderData() || new OrderData();
}

console.log(getOrderData(ORDER_STATUS.PAYMENT));
