import React from "react";
import Image from "next/image";

interface Block {
  id: number;
  title: string;
  url: string;
}

const Blocks = ({ blocks }: { blocks: Block[] }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5">
      {blocks ? (
        blocks.map((block) => (
          <Image
            key={block.id}
            src={block.url}
            alt={block.title.slice(0, 5)}
            width={100}
            height={100}
            className="cursor-pointer transform transition duration-200 ease-in-out hover:scale-110 rounded-sm"
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Blocks;
