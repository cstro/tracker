# Tracker App

## Todo List

- Typings for the firestore API
- Maybe add a form library?

## Categories

https://localfirstbank.com/article/budgeting-101-personal-budget-categories/


## Transactions

- Purchase (money out of an account)
- Payment (money into an account)
- Transfer (money from one account to another)

Purchase

```json
{
  id: string,
  type: 'purchase',
  date: string,
  amount: number,
  description: string,
  category: string,
  account: string,
  payee: string,
}
```

```json
{
  id: string,
  type: 'payment',
  date: string,
  amount: number,
  description: string,
  category: string,
  account: string,
  sender: string,
}
```
