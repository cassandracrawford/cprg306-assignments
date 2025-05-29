"use client";

import { useState } from "react";

export default function NewItem() {
    const pageStyle = "bg-[#D87280] hover:bg-[#Ac5B66] disabled:bg-[#F4B8BB] w-14 h-8 font-bold text-white text-lg";
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div className="flex justify-center w-full py-3">
            <div className="flex flex-row items-center bg-white p-3 w-64 rounded-2xl">
                <div className="mx-auto text-center bg-white w-1/2 font-bold text-lg">{quantity}</div>
                <div className="flex justify-center gap-4 mx-3">
                    <button type="button"
                        onClick={decrement} 
                        disabled={quantity === 1} 
                        className={pageStyle + (quantity > 1 ? " cursor-pointer" : "")}>
                        -
                    </button>
                        <button type="button"
                        onClick={increment} 
                        disabled={quantity === 20} 
                        className={pageStyle + (quantity < 20 ? " cursor-pointer" : "")}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}