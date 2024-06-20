import Blocks from "@/components/Blocks";

export default async function Page() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=4')
  const data = await resp.json()
  return (
    <div>
      <Blocks blocks={data}/>
    </div>
  );
}

