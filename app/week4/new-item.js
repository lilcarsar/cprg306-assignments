"use client";

import { useState } from "react";

export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);

        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };


    return(

        <main>
            <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">

            <div className="w-full max-w-md bg-zinc-900 p-8 rounded-lg shadow-md">
            

            <form onSubmit={handleSubmit}>
                <label className= "block mb-4">
                <input
                    type="text"
                    className = "border border-zinc-500 bg-zinc-200 px-5 py-3 text-zinc-800 w-full max-w-xs m-4 p-2"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </label>
                <br />
                <label className="block mb-4">
                <input
                    type="number"
                    className = "border border-zinc-500 bg-zinc-200 px-5 py-3 text-zinc-800 w-half max-w-xs m-4 p-2"
                    required
                    min="1"
                    max="99"
                    value={quantity}
                    
                    onChange={(e) => setQuantity(e.target.value)}
                />
                
                <select
                    value={category}
                    className = "border border-zinc-500 bg-zinc-200 px-5 py-3 text-zinc-800 w-half max-w-xs m-4 p-2"
                    required
                    onChange={(e) => setCategory(e.target.value)}
                >

                    <option value="">Category</option>
                    <option value= "Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
               
                </label>

                <br />
                <button type="submit" className = "border border-zinc-500 bg-zinc-200 px-5 py-3 text-zinc-800 w-full max-w-xs m-4 p-2">+</button>
            </form>
            </div>
            </div>
        </main>
    );
};