import React, { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/App.css'

const App = () => {
  const [Cards, setCards] = useState([
    { name: "Goku", id: 1, clicked: false },
    { name: "Piccolo", id: 2, clicked: false },
    { name: "Krillin", id: 3, clicked: false },
    { name: "Vegeta", id: 4, clicked: false },
    { name: "Trunks", id: 5, clicked: false },
    { name: "Frieza", id: 6, clicked: false },
    { name: "Gohan", id: 7, clicked: false },
    { name: "Cell", id: 8, clicked: false },
    { name: "Master Roshi", id: 9, clicked: false },
    { name: "Android 13", id: 10, clicked: false },
    { name: "Majin Buu", id: 11, clicked: false },
    { name: "Vegeto", id: 12, clicked: false },
  ]);
  const [score, setScore] = useState(0);
  const handleClick = (currentcard) => {
    if (currentcard.clicked === false) {
      setCards(
        Cards.map((card) => {
          if (currentcard.id === card.id) {
            return { ...card, clicked: true };
          } else {
            return card;
          }
        })
      );
      setScore(score + 1);
    } else {
      setCards(
        Cards.map((card) => {
          return { ...card, clicked: false };
        })
      );
      setScore(0);
    }
  };

  useEffect(() => {
    const shuffleArray = () => {
      let shuffledArray = new Array(12);
      for (const card of Cards) {
        let repeat = true;
        while (repeat) {
          let random = Math.floor(Math.random() * 12);
          if (!shuffledArray[random]) {
            shuffledArray[random] = card;
            repeat = false;
          } else {
            repeat = true;
          }
        }
      }
      setCards(shuffledArray);
    };
    shuffleArray();
  }, [score]);

  return (
    <div>
      <div>
        
      </div>
      <div className="App">
        {Cards.map((card) => {
          return (
            <Card key={card.id} handleClickProp={handleClick} cardProp={card} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
