import { Suspense } from "react";
import Author from "./Author";

async function BlogPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await response.json();
  return (
    <div>
      <h2>Blog Data</h2>
      <ul>
        {blogs.map((blogs: { id: number; title: string; body: string }) => (
          <li key={blogs.id}>
            <h3>Name: {blogs.title}</h3>
            <p>Email: {blogs.body}</p>
            <div>
              <Suspense fallback={"Author Loading..."}>
                Author: <Author userId={String(blogs.id)} />
              </Suspense>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPost;
