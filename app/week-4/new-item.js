"use client";

import { useState } from "react";

export default function NewItem() {
    const pageStyle = "bg-[#D87280] hover:bg-[#DF1D2D] disabled:bg-[#F4B8BB] w-20 p-2 font-bold text-white text-2xl";
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
        <div className="flex flex-col items-center w-full">
            <div className="bg-white w-64 p-6 mt-6 mb-3 rounded-2xl text-center font-bold text-4xl">{quantity}</div>
            <div className="flex items-center gap-4">
                <button onClick={decrement} disabled={quantity === 1} className={pageStyle + (quantity > 1 ? " cursor-pointer" : "")}>-</button>
                <button onClick={increment} disabled={quantity === 20} className={pageStyle + (quantity < 20 ? " cursor-pointer" : "")}>+</button>
            </div>
        </div>
    );
}