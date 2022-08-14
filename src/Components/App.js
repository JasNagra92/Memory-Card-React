import React, { useEffect, useState } from "react";

const App = () => {
  const [Cards, setCards] = useState({
    cards: Array(11).fill(false),
  });
  const [score, setScore] = useState(0);
  const handleClick = (i) => {
      setCards({cards: Cards.cards.map((card, index) => {
        if (index === i) {
          return card = true
        } else {return card}
      })})
      setScore(score + 1)
    }

  useEffect(()=>{
    console.log(Cards)
  }, [Cards])

  return (
    <div className="App">
      <button onClick={()=>handleClick(3)}>test</button>
    </div>
  );
};

export default App;
