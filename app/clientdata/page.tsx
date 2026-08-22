"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

function ClientData() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getUsers()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientData;

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Unable to fetch users");
  }

  return response.json();
}
