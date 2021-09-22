# Why Switch Statement Is Bad

First of all Switch Statement is not bad but sometimes violates Clean Code Principles
So Switch statement should be used very carefully. <br/><br/>

## Why Switch Statement is Sometimes Bad

- **Violates Open-Closed Principle S(O)LID** <br/>
  When adding a new Functionality with a new requirements so i will violate the Open-Closed Principle
- **Maintenance** <br/>
  By time with a new Requirements it will be very hard to maintain it

- **Bad Code Smell & Bad OOP Style** <br/>
  containing lots of redundant codes and the code going to be messy with time

<br/>

## Old Example

this Example Violates **Open-Closed** when we want to add new Functionality at this Function
also we have lots of redundant codes like Order Msg Data

```typescript
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
```

So Using switch on a type is very bad OOP Style how can we refactor this code ? <br/>

The best solution of this is Using **( Polymorphism + Strategy Pattern )**

## The Below Code is a Solution with Polymorphism & Strategy Pattern

1- Initialize IOrder Interface & Other Payment Processors which have different business logic

```typescript
interface IOrder {
  getOrderData(): OrderData;
}

class Checkout implements IOrder {
  getOrderData(): OrderData {
    const welcomeMsg = 'Welcome USER';
    const action = `${ORDER_STATUS.CHECKOUT} Action`;
    return new OrderData(welcomeMsg, action);
  }
}

class Payment implements IOrder {
  getOrderData(): OrderData {
    const welcomeMsg = 'Welcome USER';
    const action = `${ORDER_STATUS.PAYMENT} Action`;
    return new OrderData(welcomeMsg, action);
  }
}

class Deliver implements IOrder {
  getOrderData(): OrderData {
    const welcomeMsg = 'Welcome';
    const action = `${ORDER_STATUS.DELIVER} Action`;
    return new OrderData(welcomeMsg, action);
  }
}
```

2- Add Strategy Design Pattern Which Holds All Payment Processors Objects

```typescript
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
```

3- Now Our getOrderData function clean and Ready to use

```typescript
function getOrderData(STATUS: ORDER_STATUS): OrderData {
  const orderStrategy = new OrderStrategy();

  return orderStrategy[STATUS].getOrderData();
}
```

## Conclusion

Switch Statement is not bad at all but sometimes it violates OOP, also Breaks Open-Closed Principle <br/>
and it's going to be very hard to maintain and and refactor our Code in the future is going to be like a rock in our back <br/> and the best solution to handle
these staff is to use **Polymorphism and Strategy Pattern**
