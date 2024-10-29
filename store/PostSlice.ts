import { getAllPosts as getPosts, getPostsBySearch as getPostsSearch } from "@/services/getPosts";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type PostsState = {
  posts: any[];
  loading: boolean;
};

const initialState: PostsState = {
  posts: [],
  loading: false,
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const posts = await getPosts();
  return posts;
});

export const getPostsBySearch = createAsyncThunk("posts/getPostsBySearch", async (search: string) => {
  const posts = await getPostsSearch(search);
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getAllPosts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getPostsBySearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostsBySearch.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getPostsBySearch.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
