export const selectCommentsByMovie = (state, movieId) => {
  const allComments = state.comments;
  return allComments.filter((comment) => comment.movieId == movieId);
}