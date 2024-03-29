import axios from 'axios';

const uploadApi = axios.create({ baseURL: "http://localhost:5000" });

export const uploadImage = (imageData) => uploadApi.post("/upload/image", imageData);
export const uploadPost = (postData) => uploadApi.post("/post/create", postData);
