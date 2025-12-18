import Feed from "../server/Feed";

async function getPosts() {
  const res = await fetch("https://tarmeezacademy.com/api/v1/posts", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
}

// async function getPostsFromAPI1() {
//   const res = await fetch('https://api1.com/posts', { cache: 'no-store' })
//   return res.json()
// }

// async function getPostsFromAPI2() {
//   const res = await fetch('https://api2.com/posts', { cache: 'no-store' })
//   return res.json()
// }
export default async function FeedClient() {
  const posts = await getPosts();
  // const [api1, api2] = await Promise.all([
  //   getPostsFromAPI1(),
  //   getPostsFromAPI2(),
  // ])

  // const mergedPosts = [
  //   ...api1.data,
  //   ...api2.data,
  // ]

  return <Feed posts={posts.data} />;
}
