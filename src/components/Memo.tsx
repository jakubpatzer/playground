"use client";
import React, { useEffect, useState } from "react";

interface Card {
  id: string;
  sign: string;
  selected: boolean;
}

const Memo = ({ cardsData }: { cardsData: Card[] }) => {
  const [cards, setCards] = useState<Card[]>(cardsData);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const handleSelect = (selectedCard: Card) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, selectedCard]);
    }
  };

  useEffect(() => {
    const timeout = 1000;
    if (selectedCards.length === 2) {
      if (selectedCards[0].sign === selectedCards[1].sign) {
        setTimeout(() => {
          console.log("MATCH");
          setCards(cards.filter((card) => !selectedCards.includes(card)));
          setSelectedCards([]);
        }, timeout);
      } else {
        setTimeout(() => {
          console.log("FAIL");
          setSelectedCards([]);
        }, timeout);
      }
    }
  });

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6">
      {cards.length > 0 ? (
        cards.map((card: Card) => (
          <div
            key={card.id}
            className="bg-white text-black w-24 h-24 flex justify-center items-center custom-hover"
            onClick={() => handleSelect(card)}
          >
            <p className={`${card.selected ? "visible" : "invisible"}`}>
              {card.sign}
            </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Memo;
