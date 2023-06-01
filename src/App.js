import { useState } from "react";
import Menus from "./components/Menus";
import './App.css'

function App() {
  const menuItems = [
      { id:1, category: 'drink',  name: 'Filter Coffee', price: 20 },
      { id:2, category: 'drink',  name: 'Hot Chocolate', price: 30 },
      { id:3, category: 'drink', name: 'Cappuccino', price: 20.50 },
      { id:4, category: 'drink',  name: 'Orange Juice', price: 20 },
      { id:5, category: 'drink',  name: 'Sparkling Water', price: 10.50 },
      { id:6, category: 'drink',  name: 'Lemonade / Cola', price: 20 },
      { id:7, category: 'food',  name: 'Salmon Bagel', price: 70 },
      { id:8, category: 'food',  name: 'Grilled Cheese', price: 40.50 },
      { id:9, category: 'food',  name: 'Tomato Soup', price: 40 },
      { id:10, category: 'food', name: 'Bean Burrito', price: 60 },
      { id:11, category: 'food', name: 'Spinach Pie', price: 70 },
      { id:12, category: 'food', name: 'Daily Special', price: 70 },
    ]
    const [ total, setTotal ] = useState(0);
    const [ billPaid, setBillPaid ] = useState(false);
    let [ customerNo, setCustomerNo ] = useState(0);
    const [ takingAmount, setTakingAmount ] = useState(0);
    const [clicked, setClicked] = useState(false);

    const payBillHandler = () => {
        if(total === 0){
          alert('No Item is Selected')
        } else {
          // setTotal(0);
          setBillPaid(true);
          // setBtnText(false);
          setCustomerNo(prev => {
            return customerNo = prev + 1;
          })
          setTakingAmount(total)
        }
        if(clicked){
          setClicked(true);
          // setCustomerNo()
          alert ("Amount Taken, please, reload the page.")
        }
    }

    return (
    <div className="wrapper">
      <h1>Self Servic Cafe</h1>
      <Menus 
        menuItems={menuItems} 
        total={total} 
        setTotal={setTotal} 
        billPaid={billPaid} 
        payBillHandler={payBillHandler} 
        customerNo={customerNo}
        takingAmount={takingAmount}
        />
    </div>
  );
}

export default App;
