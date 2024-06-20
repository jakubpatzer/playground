import Todos from "@/components/Todos";

export default async function Page() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const data = await resp.json()
  return (
    <div>
      <Todos todos={data} />
    </div>
  );
}

