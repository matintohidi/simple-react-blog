import axios from 'axios';

export const getArticles = (page) => page !== undefined ? axios.get(`/articles/?page=${page}`) : axios.get('/articles/');

export const sortArticles = (ordering , page) => page !== undefined ? axios.get(`/articles/?page=${page}&ordering=${ordering}`) : axios.get(`/articles/?ordering=${ordering}`);

export const getAricle = (slug) => axios.get(`/articles/${slug}/`);

export const getArticleComments = (slug) => axios.get(`/articles/${slug}/comments/`);

export const leaveComment = (slug , content , token) => axios.post(`/articles/${slug}/comments/` , { content } , { headers: { 'Authorization': `Token ${token}` } });

export const replyComment = (slug , parent , content , token) => axios.post(`/articles/${slug}/comments/` , { content , parent } , { headers: { 'Authorization': `Token ${token}` } });

export const createArticle = (data , token) => {
    return axios.post('/articles/' , data , {
        headers: { 'Authorization': `Token ${token}` , 'Content-Type': 'multipart/form-data' }
    })
}

export const putArticle = (slug , data , token) => {
    return axios.put(`/articles/${slug}/` , data , {
        headers: { 'Authorization': `Token ${token}` , 'Content-Type': 'application/json' }
    }) 
}

export const getMeUser = (token) => axios.get('/auth/users/me/' , { headers: { 'Authorization': `Token ${token}` } });

export const getUser = (user) => axios.get(`/auth/author/${user}`);

export const login = (data) => axios.post('/auth/token/login/' , data);

export const signup = (data) => axios.post('/auth/users/' , data);

export const logout = (token) => axios.post('/auth/token/logout/' , null , { headers: { 'Authorization': `Token ${token}` } });

export const getTags = () => axios.get('/tags/');

export const createNewTag = (tag) => axios.post('/tags/' , { 'name': tag });

export const getTag = (tag) => axios.get(`/tags/${tag}/`);

export const weekTrand = () => axios.get('/articles/week_trand/');

export const filterArticles = (filter , allUrl) => allUrl ? axios.get(filter) : axios.get(`/articles/${filter}`);

export const toggleLike = (method , slug , token) => axios.post(`/articles/${slug}/${method}/` , null , { headers: { 'Authorization': `Token ${token}` } });

export const isLiked = (slug , token) => axios.get(`/articles/${slug}/isliked/` , { headers: { 'Authorization': `Token ${token}` } });

export const toggleSave = (method , slug , token) => axios.post(`/articles/${slug}/${method}/` , null , { headers: { 'Authorization': `Token ${token}` } });

export const isSaved = (slug ,token) => axios.get(`/articles/${slug}/issaved/` , { headers: { 'Authorization': `Token ${token}` } });

export const toggleFollow = (method , id , token) => axios.post(`/auth/users/${id}/${method}/` , null , { headers: { 'Authorization': `Token ${token}` } });

export const isFollowed = (id , token) => axios.get(`/auth/users/${id}/isfollowed/` , { headers: { 'Authorization': `Token ${token}` } });