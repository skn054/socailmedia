import axios from "axios";

const getAllPostsService = () => {
  return axios.get("/api/posts");
};

const getSinglePostService = (postId) => {
  return axios.get(`/api/posts/${postId}`);
};

const createPostService = ({ input, postImage, token, user }) => {
  return axios.post(
    "/api/posts",
    { postData: { content: input, postImage, fullName: user.fullName } },
    {
      headers: { authorization: token },
    }
  );
};

const editPostService = ({ token, postImage, post, input }) => {
  return axios.post(
    `/api/posts/edit/${post._id}`,
    { postData: { content: input, postImage } },
    {
      headers: { authorization: token },
    }
  );
};

const deletePostService = ({ _id, token }) => {
  return axios.delete(`/api/posts/${_id}`, {
    headers: { authorization: token },
  });
};

const likePostService = ({ _id, token }) => {
  return axios.post(
    `/api/posts/like/${_id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const dislikePostService = ({ _id, token }) => {
  return axios.post(
    `/api/posts/dislike/${_id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export {
  getAllPostsService,
  getSinglePostService,
  createPostService,
  editPostService,
  deletePostService,
  likePostService,
  dislikePostService,
};
