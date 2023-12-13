import axios from 'axios';
import { endpoints } from './endpoints';

export const getAllArticles = () => {
    return axios
        .get(endpoints.articles)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error("Error fetching articles:", error)
        });
};

export const getArticleById = (articleId) => {
    return axios
        .get(endpoints.articleById(articleId))
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error("Error fetching article:", error)
        });
};

export const getArticleComments = (articleId) => {
    return axios
        .get(endpoints.articleComments(articleId))
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error("Error fetching comments for this article:", error);
        });
}

export const patchArticleVote = (articleId, voteChange) => {
    const url = endpoints.updateArticleVotes(articleId);

    const data = {
        inc_votes: voteChange 
    };

    return axios
        .patch(url, data)
        .then(response => response.data.article.votes)
        .catch((error) => {
            console.error(`Error patching vote for article ${articleId}:`, error);
            throw error; 
        });
};

export const postComment = (articleId, bodyMsg) => {
    const url = endpoints.postComment(articleId)

    const commentData = {
        username: UserHeader.username, body: bodyMsg
    }

    return axios
        .post(url, commentData)
        .then((response) => {
            response.data.comment
        })
        .catch((error) => {
            console.error(`Error posting comment for article ${articleId}:`, error);
            throw error; 
        });
}