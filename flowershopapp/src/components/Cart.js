export default function Cart({cart, updateCart}) {
    //calculate the Grand total
    const grandTotal = cart.reduce((total, item) => total + item.price * item.qty,0
    );

    const handleQuantityChange = (id, newQty) => {
        if(newQty < 0) return; //Prevent negative quantities
        updateCart(id, newQty); //Call the parent function to update cart
    };

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                <tbody>
                {
                   cart.length > 0 ? (
                   cart.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>
                            <input type ="number" value={item.qty} onChange={(e)=> handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                            min="0"/>
                        </td>
                        <td>{item.price * item.qty}</td>
                    </tr>
                   )) 
                ) : (
                    <tr>
                        <td colSpan="3">Cart is empty</td>
                    </tr>
                )}
                <tr>
                    <td><strong>Grand Total : </strong></td>
                    <td colSpan={2}>{grandTotal}</td>
                </tr>
                </tbody>
            </table>
           
        </div>
    );
}