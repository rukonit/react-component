import './ExpenseForm.css'
import react, {useState} from 'react'
const ExpenseForm = (props) => {
   
    const [userInput, setUserInput] = useState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })

    const titleHandler = (event) => {
      setUserInput((previousState) => {
        return { ...previousState,
         enteredTitle : event.target.value}
       })
      }

    const amountHandler = (event) => {
      setUserInput((previousState) => {
        return { ...previousState,
         enteredAmount : event.target.value}
       })
    }

    const dateHandler = (event) => {
      setUserInput((previousState) => {
       return { ...previousState,
        enteredDate : event.target.value}
      })
    }

    const submitHandler =(event) => {
      event.preventDefault();

      const expenseData = {
        title: userInput.enteredTitle,
        amount: userInput.enteredAmount,
        date: new Date(userInput.enteredDate)
      }

      console.log(expenseData);
      props.onSaveExpenseData(expenseData)
      setUserInput({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
      })
    }

    return (
       <form onSubmit={submitHandler}>
           <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input onChange={titleHandler} value={userInput.enteredTitle} type='text' />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input onChange={amountHandler} value={userInput.enteredAmount} type='number' min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input onChange={dateHandler} value={userInput.enteredDate} type='date' min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="submit">Add Expense</button>
        <button onClick={props.onToggle}>Cancel</button>
      </div>
       </form>
    )
}

export default ExpenseForm