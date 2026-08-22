async function Author({ userId }: { userId: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const author = await res.json();
  return (
    <div>
      <p>{author.name}</p>
    </div>
  );
}

export default Author;
