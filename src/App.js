import { useEffect, useState } from "react";
import './App.css'
import Content from "./component/content/Content";
import SliderItem from "./component/sliderItem/index.js"
import { initialData } from "./data.js";
import Header from "./component/header/Header";
import Menu from "./component/menu/Menu";

function App() {
  const [list, setList] = useState(initialData);
  const [selected, setSelected] = useState(null);
  function handleItem(item) {
    list.map((listItem) => {
      if (listItem?.id === item?.id) {
        listItem.selected = true;
        setSelected(listItem);
      } else {
        listItem.selected = false;
      }
    });
    setList(list);
  };
  useEffect(() => {
    const selectedItem = list.find((item) => item.selected);
    setSelected(selectedItem);
  }, []);
  return (
    <div className="App" style={{ backgroundImage: `url(${selected?.image})` }}>
      <Menu />
      <Header />
      {selected && (
        <Content key={selected.id} selected={selected} />
      )}
      <div className="container">
        {list.map((item) => {
          return (
            <SliderItem key={item.id} item={item} handleItem={handleItem} />
          );
        })}
      </div>
    </div>
  );
};

export default App;