"use client";

import { useState} from "react";

export default function NewItem({onAddItem}) {
    const pageStyle = "bg-[#D87280] hover:bg-[#Ac5B66] disabled:bg-[#F4B8BB] w-14 h-8 font-bold text-white text-lg";
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 

        // create an item object with current values
        const item = {
            id: Array.from({length: 18}, () =>
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                .charAt(Math.floor(Math.random() * 62))
                ).join(''),
            name, 
            quantity, 
            category,
        }

        // log the item to the console and display an alert with the current state
        console.log("Submitted: ", item);
        onAddItem(item);

        // reset the state variables to their initial values
        setQuantity(1);
        setName("");
        setCategory("produce");
    }

    return (
        <div className="flex justify-center mb-5">
            <form onSubmit={handleSubmit} className="flex flex-col items-center bg-[#D87280] p-6">
                {/* Name Field */}
                <input type="text" className="p-3 bg-white w-full rounded-2xl h-14" placeholder="Item Name" value={name} onChange={(event) => setName(event.target.value)} required />

                <div className="flex flex-wrap gap-4 w-full mt-3">
                    {/* Quantity Filed */}
                    <div className="flex flex-1 flex-row items-center bg-white p-3 rounded-2xl">
                        <div className="mx-auto text-center bg-white font-bold text-lg">{quantity}</div>
                        <div className="flex justify-center gap-4 mx-3">
                            <button type="button" onClick={decrement} disabled={quantity === 1} 
                                className={pageStyle + (quantity > 1 ? " cursor-pointer" : "")}> - </button>
                            <button type="button" onClick={increment} disabled={quantity === 20} 
                                className={pageStyle + (quantity < 20 ? " cursor-pointer" : "")}> + </button>
                        </div>
                    </div>
                    {/* Category Field */}
                    <select value={category} className="flex-1 bg-white p-3 rounded-2xl" onChange={(event) => setCategory(event.target.value)}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                    <button type="submit" className="flex-1 bg-[#AC5B66] p-2 text-[#FFFFFF] font-bold hover:bg-[#F4B8BB] rounded-2xl cursor-pointer" >Submit</button>
                </div>
            </form>
        </div>
    );
}