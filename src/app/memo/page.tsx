import { v4 as uuidv4 } from "uuid";
import Memo from "@/components/Memo";
import { shuffleArray } from "@/utils/utils";

const cardsData = [
  {
    id: uuidv4(),
    sign: 'alpha',
    selected: false
  },
  {
    id: uuidv4(),
    sign: 'alpha',
    selected: false
  },
  {
    id: uuidv4(),
    sign: 'beta',
    selected: false
  },
  {
    id: uuidv4(),
    sign: 'beta',
    selected: false
  },
]

export default function Page() {
  return (
    <div>
      <Memo cardsData={shuffleArray(cardsData)} />
    </div>
  );
}

