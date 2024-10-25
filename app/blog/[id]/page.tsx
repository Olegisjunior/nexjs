import { Metadata } from "next";

type Params = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = params;
  const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params }: Params) {
  const { id } = params;
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
