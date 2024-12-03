import '../assets/CSS/layout.css';
export default function Product({name,price,img, onAddToCart}){
    
    return(
        <div className="grid-item">

            <div class="card">
                <img  src={require(`../assets/image/${img}`)} alt={name}/>
                <div class="card-body">
                    <h5 class="card-title">{name}  Price:{price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button class="card-button" onClick={onAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}