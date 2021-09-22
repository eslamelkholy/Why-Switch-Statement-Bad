enum ORDER_STATUS {
  CHECKOUT = 'CHECKOUT',
  PAYMENT = 'PAYMENT',
  DELIVER = 'DELIVER',
}

class Order {
  public msg?: string;
  public action?: string;
}

function orderData(STATUS: string): Order {
  const result = new Order();

  switch (STATUS) {
    case ORDER_STATUS.CHECKOUT:
      result.msg = 'Welcome USER';
      result.action = `${ORDER_STATUS.CHECKOUT} Action`;

    case ORDER_STATUS.PAYMENT:
      result.msg = 'Welcome USER';
      result.action = `${ORDER_STATUS.PAYMENT} Action`;

    case ORDER_STATUS.DELIVER:
      result.msg = 'Welcome';
      result.action = `${ORDER_STATUS.DELIVER} Action`;
    default:
      break;
  }

  return result;
}

console.log(orderData(ORDER_STATUS.CHECKOUT));
