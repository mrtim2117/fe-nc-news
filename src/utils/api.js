import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://tims-nc-news.herokuapp.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  const params = {};
  const apiParams = {};

  if (topic) params.topic = topic;
  if (sort_by) params.sort_by = sort_by;
  if (order) params.order = order;

  if (Object.keys(params).length > 0) apiParams.params = params;

  return ncNewsApi.get("/articles", apiParams).then((res) => {
    return res.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const getTopics = () => {
  return ncNewsApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const getUsers = () => {
  return ncNewsApi.get(`/users`).then((res) => {
    return res.data.users;
  });
};
