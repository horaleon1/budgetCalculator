import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import uuid from 'uuid/v4'

const initialExpenses = [
  {id:uuid(), charge:"rent", amount:1600},
  {id:uuid(), charge:"car payment", amount:400},
  {id:uuid(), charge:"credit card bill", amount:1200}  
]

console.log(initialExpenses);

const App = () => {


  return (
    <div>
      <Alert />
     <ExpenseForm /> 
     <ExpenseList />    
    </div>
  )
}

export default App

