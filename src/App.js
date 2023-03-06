import { useEffect, useState } from "react";

import Content from "./component/content";
import Header from "./component/header";
import Menu from "./component/menu";
import Slider from "./component/slider";

import { initialData } from "./assets/data";
import './App.css'

function App() {
  const [list, setList] = useState(initialData);
  const [selected, setSelected] = useState(null);
  const [isHamburger, setIsHamburger] = useState(true)

  const allHamburger = () => {
    setIsHamburger(!isHamburger);
  }

  const handleItem = (item) => {
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
          <Content selected={selected} isHamburger={isHamburger} />
        )}
        <Slider list={list} handle={handleItem} hamburger={isHamburger} />
      </div>
    </div>
  );
};

export default App;

