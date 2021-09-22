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

## OLD Example

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
