export const endpoints = {
    api: 'https://prodz-nc-news.onrender.com/api',
    articles: 'https://prodz-nc-news.onrender.com/api/articles',
    articleById: (articleId) => `https://prodz-nc-news.onrender.com/api/articles/${articleId}`,
    articleComments: (articleId) => `https://prodz-nc-news.onrender.com/api/articles/${articleId}/comments`,
    postComment: (articleId) => `https://prodz-nc-news.onrender.com/api/articles/${articleId}/comments`,
    updateArticleVotes: (articleId) => `https://prodz-nc-news.onrender.com/api/articles/${articleId}`,
    deleteComment: (commentId) => `https://prodz-nc-news.onrender.com/api/comments/${commentId}`,
    topics: 'https://prodz-nc-news.onrender.com/api/topics',
    users: 'https://prodz-nc-news.onrender.com/api/users'
};
