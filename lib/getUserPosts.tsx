import React from "react";

export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    //ISR{Incremental Static Generation} Strategy
    // {cache : force-cache} : caching is set by default => fetched data from a dynamic request in url will be cached
    // {cache : no-store} : always dynamic / never cach data
    //{ next: { revalidate: 30 } } incremental static regeneration => fetched data revalidation after 30s ++++
    { next: { revalidate: 30 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch user !!");
  }
  return res.json();
}
