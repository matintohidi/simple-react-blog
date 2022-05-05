import axios from 'axios';

export const getArticles = (page) => page !== undefined ? axios.get(`/articles/?page=${page}`) : axios.get('/articles/');

export const getAricle = (slug) => axios.get(`/articles/${slug}/`);

export const getArticleComments = (slug) => axios.get(`/articles/${slug}/comments/`);

export const createArticle = (data , token) => {
    return axios.post('/articles/' , data , {
        headers: { "Authorization": `Token ${token}` }
    })
}