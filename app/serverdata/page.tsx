interface User {
  id: number;
  name: string;
  email: string;
}

async function ServerData() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();

  return (
    <div>
      <h2>Server Data</h2>
      <ul>
        {data.map((user: User) => (
          <li key={user.id}>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServerData;
