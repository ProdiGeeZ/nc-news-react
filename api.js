import axios from 'axios';
import { endpoints } from './endpoints';

export const getAllArticles = () => {
    return axios.get(endpoints.articles)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error("Error fetching articles:", error)
        });
};

export const getArticleById = (articleId) => {
    return axios.get(endpoints.articleById(articleId))
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error("Error fetching article:", error)
        });
};

