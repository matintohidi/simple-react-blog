import axios from 'axios';

export const getArticles = (page) => page !== undefined ? axios.get(`/articles/?page=${page}`) : axios.get('/articles/');

export const getAricle = (slug) => axios.get(`/articles/${slug}/`);

export const getArticleComments = (slug) => axios.get(`/articles/${slug}/comments/`);

export const createArticle = (data , token) => {
    return axios.post('/articles/' , data , {
        headers: { 'Authorization': `Token ${token}` , 'Content-Type': 'multipart/form-data' }
    })
}

export const getMeUser = (token) => axios.get('/auth/users/me/' , { headers: { 'Authorization': `Token ${token}` } });

export const getUser = (user) => axios.get(`/auth/author/${user}`);

export const login = (data) => axios.post('/auth/token/login/' , data);

export const signup = (data) => axios.post('/auth/users/' , data);

export const logout = (token) => axios.post('/auth/token/logout/' , { headers: { 'Authorization': `Token ${token}` } });