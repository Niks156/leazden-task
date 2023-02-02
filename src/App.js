import { Route, Routes } from "react-router-dom";
import Item from "./components/Item";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="item" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
