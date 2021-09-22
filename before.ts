enum ORDER_STATUS_BEFORE {
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
    case ORDER_STATUS_BEFORE.CHECKOUT:
      result.msg = 'Welcome USER';
      result.action = `${ORDER_STATUS_BEFORE.CHECKOUT} Action`;

    case ORDER_STATUS_BEFORE.PAYMENT:
      result.msg = 'Welcome USER';
      result.action = `${ORDER_STATUS_BEFORE.PAYMENT} Action`;

    case ORDER_STATUS_BEFORE.DELIVER:
      result.msg = 'Welcome';
      result.action = `${ORDER_STATUS_BEFORE.DELIVER} Action`;
    default:
      break;
  }

  return result;
}

console.log(orderData(ORDER_STATUS_BEFORE.CHECKOUT));
