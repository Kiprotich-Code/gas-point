import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlaceOrder() {
    const navigate = useNavigate('')

    const handleSubmit = () => {
        alert("Your order has been successfully, Our is team working to deliver! Thank you.")
        navigate('/')
    }

    return (
            <div class="App-header">
            <form>
                <div>
                    <h3>Place Your Order Here</h3>
                </div>

                <input
                type="text"
                placeholder="Enter your full names"
                name="full_names"
                /><br></br>

                <input
                type="text"
                placeholder="Enter your phone number"
                name="phone_no"
                /><br></br>

                <input
                type="text"
                placeholder="Choose your county"
                name="county"
                /><br></br>
                
                <input
                type="text"
                placeholder="Enter your exact location"
                name="location"
                /><br></br>

                <input
                type="text"
                placeholder="Which service do you want ?"
                name="service_type"
                /><br></br>

                <input
                type="text"
                placeholder="Choose your gas type ?"
                name="gas_type"
                /><br></br>

                <input
                type="text"
                placeholder="Choose the weight of your gas(Kgs) ?"
                name="gas_weight"
                /><br></br>

                <div>
                    <span><h3>Amount: Ksh 4000</h3></span>
                </div>                

                <div>
                    <span><h4>Payment: Pay on delivery.</h4></span>
                </div>

                <button onClick={handleSubmit}>Place Order</button>
            </form>
        </div>
    )
}