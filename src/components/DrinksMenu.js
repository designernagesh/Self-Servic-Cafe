import { useState } from "react";

const DrinksMenu = ({drink, total, setTotal}) => {
    const [clicked, setClicked] = useState(false);
    const [ btnText, setBtnText ] = useState(false);

    const addItemHandler = (e) => {
        if(!clicked) {
            setClicked(true);
            setTotal( prev => {
                return total = prev + e;
            })
            setBtnText(true);
        } else {
            alert("Item has already selected.")
        }
    }

    return (
        <li className="card">
            <h4>{drink.name}</h4>
            <p>Rs. <strong>{drink.price}/-</strong> </p>
            <button onClick={() => addItemHandler(drink.price)} className={ btnText ? "add-item active" : "add-item" }>
                {btnText ? "Item Added" : "Add Item" }
            </button> 
        </li>
    )
}

export default DrinksMenu;