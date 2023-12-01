"use client";

import { useState } from 'react';
import NewItem from './new-item.js';
import ItemList from './item-list.js';
import MealIdeas from './meal-ideas.js'; 
import ItemsData from "./items.json";
import Heading from "./heading";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState(ItemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


  function handleItemSelect(selectedItem) {

    const cleanedItemName = selectedItem.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();

   
    setSelectedItemName(cleanedItemName);
  }


  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main>
      <section>
       {user ? (
      <div style={{ display: 'flex' }}>
        <div>
          <Heading title="Shopping List" />

          <NewItem onAddItem={handleAddItem} />

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>) : (
        <p>You must be logged in to view this page.</p>
                )}
        </section>
    </main>
  );
}

