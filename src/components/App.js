import Content from "./inc/Content";
import Footer from "./inc/Footer";
import Header from "./inc/Header";
import { useState } from "react";
import AddItem from "./inc/AddItem";
import SearchItem from "./inc/SearchItem";

function App() {
//   const [items, setItems] = useState([
//     {
//         id: 1,
//         checked: false,
//         item: "Apple Fruit"
//     },
//     {
//         id: 2,
//         checked: false,
//         item: "Orange Fruit"
//     },
//     {
//         id: 3,
//         checked: false,
//         item: "Grave Fruit"
//     }
//   ]);
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // AddItem
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
       />
      <Footer vendor="Grocery App." length={items.length} />
    </div>
  );
};

export default App;
