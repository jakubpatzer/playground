import Users from "@/components/Users";

export default async function Page() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await resp.json()
  return (
    <div>
      <Users users={data}/>
    </div>
  );
}

