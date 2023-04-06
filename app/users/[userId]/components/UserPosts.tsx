import React from "react";

type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
          <br />
        </div>
      ))}
    </>
  );
}
