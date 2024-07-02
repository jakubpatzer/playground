"use client";
import React from "react";
import Image from "next/image";

interface Block {
  id: number;
  title: string;
  url: string;
}

const Sampler = ({ blocks }: { blocks: Block[] }) => {
  const handlePlay = (audioSrc: string): void => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5">
      {blocks ? (
        blocks.map((block: Block, i: number) => (
          <Image
            key={block.id}
            src={block.url}
            alt={block.title.slice(0, 5)}
            width={100}
            height={100}
            className="custom-hover rounded-sm"
            onClick={() => handlePlay(`/audio/kick_${i + 1}.wav`)}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Sampler;
