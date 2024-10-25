import { Metadata } from "next";

type Props = {
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getData(params.id);

  return {
    title: post.title,
  };
}

export default async function Post({ params }: Props) {
  const post = await getData(params.id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
