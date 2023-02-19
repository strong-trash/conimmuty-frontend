import axios from 'axios';
axios.defaults.withCredentials = true;
export const getAllPosts = () => {
	// return post.get('/', { withCredentials: true });
	return axios.get('https://bj.riroan.com/com/post', { withCredentials: true });
};

export const getPost = pid => {
	return axios.get(`https://bj.riroan.com/com/post/${pid}`);
};

export const getComments = pid => {
	return axios.get(`https://bj.riroan.com/com/comment/${pid}`);
};

export const createPost = data => {
	return axios.post(`https://bj.riroan.com/com/post`, data);
};

export const createComment = data => {
	return axios.post(`https://bj.riroan.com/com/comment`, data);
};
