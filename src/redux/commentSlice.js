import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { message, rating, movieId } = action.payload;
      state.comments.push({ id: new Date(), message, rating, movieId });
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload.id);
    }
  },
});

export const { addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer;
