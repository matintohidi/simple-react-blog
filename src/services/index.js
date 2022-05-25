import axios from 'axios';

export const getArticles = (page , method) => page !== undefined ? axios.get(`/articles/?ordering=-${method}&page=${page}`) : axios.get(`/articles/?ordering=-${method}`);

export const getAricle = (slug) => axios.get(`/articles/${slug}/`);

export const getArticleComments = (slug) => axios.get(`/articles/${slug}/comments/`);

export const createArticle = (data , token) => {
    return axios.post('/articles/' , data , {
        headers: { 'Authorization': `Token ${token}` , 'Content-Type': 'multipart/form-data' }
    })
}

export const putArticle = (data , token) => {
    return axios.put(`/articles/${data.slug}/` , data , {
        headers: { 'Authorization': `Token ${token}` , 'Content-Type': 'application/json' }
    }) 
}

export const getMeUser = (token) => axios.get('/auth/users/me/' , { headers: { 'Authorization': `Token ${token}` } });

export const getUser = (user) => axios.get(`/auth/author/${user}`);

export const login = (data) => axios.post('/auth/token/login/' , data);

export const signup = (data) => axios.post('/auth/users/' , data);

export const logout = (token) => axios.post('/auth/token/logout/' , token , { headers: { 'Authorization': `Token ${token}` } });

export const getTags = () => axios.get('/tags/');

export const createNewTag = (tag) => axios.post('/tags/' , { 'name': tag });

export const getTag = (tag) => axios.get(`/tags/${tag}/`);