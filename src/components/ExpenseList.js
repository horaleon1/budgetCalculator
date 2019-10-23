import React from 'react'
import ExpenseItem from './ExpenseItem';
import {MdDelete} from 'react-icons/md';

const ExpenseList = ({expenses}) => {
  return (
    <div>
      <ul>
        {
          expenses.map((e)=> {
          return <ExpenseItem key={e.id} expense={e}/> })
        }
      </ul>
      {expenses.length > 0 && <button>
        clear expenses
        <MdDelete />         </button>}
    </div>
  )
}

export default ExpenseList
