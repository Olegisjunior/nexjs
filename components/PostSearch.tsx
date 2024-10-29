"use client";

import { getPostsBySearch } from "@/store/PostSlice";
import { AppDispatch, RootState } from "@/store/store";
import { FormEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const PostSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await dispatch(getPostsBySearch(search));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};
