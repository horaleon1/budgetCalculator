import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense }) => {
  const { id, charge, amount } = expense;
  return (
    <div>
      <li>
        <div>
          <span>{charge} </span>
          <span>${amount}</span>
        </div>
        <div>
          <button>
            <MdEdit />
          </button>
          <button>
            <MdDelete />
          </button>
        </div>
      </li>
    </div>
  );
};

export default ExpenseItem;
