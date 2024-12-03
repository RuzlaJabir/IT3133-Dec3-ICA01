export default function Cart({cart}) {
    //calculate the Grand total
    const grandTotal = cart.reduce((total, item) => total + item.price * item.qty,0
    );
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
                        <td>{item.qty}</td>
                        <td>Rs. {item.price * item.qty}</td>
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