import { useEffect, useState } from "react";
import './App.css'
import Content from "./component/content/index";
import SliderItem from "./component/sliderItem/index.js"
import { initialData } from "./data.js";
import Header from "./component/header/index";
import Menu from "./component/menu/index";

function App() {
  const [list, setList] = useState(initialData);
  const [selected, setSelected] = useState(null);
  const [isHamburger, setIsHamburger] = useState(true)

  function allHamburger() {
    setIsHamburger(!isHamburger);
  }
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
      <div className="publicContainer" >
        <Menu isHamburger={isHamburger} allHamburger={allHamburger} />
        <Header isHamburger={isHamburger} allHamburger={allHamburger} />
        {selected && (
          <Content key={selected.id} selected={selected} isHamburger={isHamburger} />
        )}
        <div className="container">
          {list.map((item) => {
            return (
              <SliderItem key={item.id} item={item} handleItem={handleItem} isHamburger={isHamburger} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;