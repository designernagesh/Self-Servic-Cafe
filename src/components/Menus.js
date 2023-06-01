import DrinksMenu from "./DrinksMenu";
import FoodMenu from "./FoodMenu";

const Menus = ({ menuItems, billPaid, payBillHandler, total, setTotal, customerNo, takingAmount }) => {
    return (
        <>
            <div className="menus">
                <div className="left">
                    <h2>Drinks Menu</h2>
                    <ul>
                        { 
                            menuItems.filter(item => item.category === "drink").map(drink => {
                                return (
                                    <DrinksMenu drink={drink} total={total} setTotal={setTotal} />
                                )
                            }) 
                        }
                    </ul>
                </div>

                <div className="right">
                    <h2>Food Menu</h2>
                    <ul>
                        { 
                            menuItems.filter(item => item.category === "food").map(food => {
                                return (
                                    <FoodMenu food={food} total={total} setTotal={setTotal} />
                                )
                            }) 
                        }
                    </ul>
                </div>
            </div>
            
            <h3> { `Total Amount: ${total}` }/- </h3>

            <button className="btn-paybill" onClick={ payBillHandler }>
                { billPaid ? "Bill Paid" : "Pay Bill" }
            </button>
            {
                billPaid ? <h1> { `Takings: ${takingAmount}` }/- / {`Customer No. ${customerNo}`} </h1> : " "
            }
        </>
    )
}

export default Menus;