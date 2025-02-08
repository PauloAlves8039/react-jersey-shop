

export default function OrderDetails ({itemsInBag}) {

    function calculateTotal(){
        let orderTotal = 0;
        itemsInBag.forEach(item => orderTotal += item.price * item.quantity);
        return orderTotal.toFixed(2);
    }

    return ( 
        <div className="animation-fade-in-downbig-1s">
            <section className="summary">
                <strong className="title-color">Order Summary</strong>
                <table>
                    <thead>
                        <tr className="subtitle-color">
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    { itemsInBag.map(item => 
                        <tr>
                            <td>{item.quantity}x {item.name}</td>
                            <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ) }
                
                        <tr>
                            <th>Total</th>
                            <th>$ {calculateTotal()}</th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}