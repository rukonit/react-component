import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React, {useState} from 'react';
import '../Expenses/Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';


const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020')
  const [filteredExpenses, setFilteredExpenses] = useState(props.items)
//.
  const filterChangeHandler = (filterYear)=>{

    setSelectedYear(filterYear)

    setFilteredExpenses(props.items.filter(item => {return item.date.getFullYear() == filterYear}))

  }
  

  return (
    <div>
      
    <Card className="expenses">
    <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
   
    {
     filteredExpenses.length === 0 ? 
     (<p className='white'>No Item Found</p>
       ) :
    filteredExpenses.map((item) => 
    
    
      (<ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
      ))}


      
      {/* <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
     
    </Card>
    </div>
  );
}

export default Expenses;