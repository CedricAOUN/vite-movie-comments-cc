import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { message, rating } = action.payload;
      state.comments.push({ id: Date.now(), message, rating });
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
    }
  },
});

export const { addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer;
