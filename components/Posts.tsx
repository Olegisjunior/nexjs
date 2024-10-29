"use client";
import Link from "next/link";
import { getAllPosts } from "@/store/PostSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, posts } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts?.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
