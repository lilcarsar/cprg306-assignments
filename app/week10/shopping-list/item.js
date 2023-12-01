"use client";

import React from "react";

export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;

  return (
    <div onClick={() => onSelect(item)} className="border border-zinc-500 bg-zinc-800 px-5 py-3 text-zinc-200 w-full max-w-xs m-4 p-2">
      <ul>
        <li>
          <h3 className="text-xl font-semibold">{name}</h3>
        </li>
        <li>
          <p>There is {quantity} left of this product</p>
        </li>
        <li>
          <p>Product category: {category}</p>
        </li>
      </ul>
    </div>
  );
}
