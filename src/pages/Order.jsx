function Order() {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Place an Order</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Shipping Address" required />
          <select required>
            <option value="">Select Product Type</option>
            <option value="standard">Standard</option>
            <option value="branded">Corporate Branded</option>
          </select>
          <input type="number" placeholder="Quantity" min="1" required />
          <button type="submit">Submit Order</button>
        </form>
      </div>
    );
  }
  
  export default Order;
  