import axios from 'axios';
axios.defaults.withCredentials = true;

const BASE_URL = 'https://api.riroan.com/community';
const POST_URL = `${BASE_URL}/post`;
const COMMENT_URL = `${BASE_URL}/comment`;
const LIKE_URL = `${BASE_URL}/like`;
const DISLIKE_URL = `${BASE_URL}/dislike`;

export const getAllPosts = () => {
	return axios.get(POST_URL, { withCredentials: true });
};

export const getPost = pid => {
	return axios.get(`${POST_URL}/${pid}`);
};

export const getComments = pid => {
	return axios.get(`${COMMENT_URL}/${pid}`);
};

export const createPost = data => {
	return axios.post(POST_URL, data);
};

export const createComment = data => {
	return axios.post(COMMENT_URL, data);
};

export const like = pid => {
	return axios.post(`${LIKE_URL}/${pid}`);
};

export const dislike = pid => {
	return axios.post(`${DISLIKE_URL}/${pid}`);
};
