import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './News.module.css'

import NewsItems from './NewsItems';
import SearchItem from './SearchItem';

function News() {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState();
    const [showedArticles, setShowedArticles] = useState();


    useEffect(() => {
        axios.get('http://localhost:3001/?searchTerm=bitcoin')
            .then(response => response)
            .then(res => {
                console.log(res.data.articles)
                setLoading(false);
                setArticles(res.data.articles);
                setShowedArticles(res.data.articles);
            });
    }, []);

    const SearchbyAuthor = (value) => {
        console.log(value);
        if (value === '') {
            setShowedArticles(articles);
        } else {
            const filteredArticleByAuthor = articles.filter(article => article.author && article.author.toLowerCase().includes(value.toLowerCase()));
            // console.log(filteredArticleByAuthor);
            setShowedArticles(filteredArticleByAuthor)
        }

    }

    return (
        <div className="container">
            <div className="search-bar">
                <SearchItem SearchbyAuthor={SearchbyAuthor} />
            </div>
            <div className="news">
                {loading ? "Loading..." : <NewsItems articles={showedArticles} />}
            </div>
        </div>
    );
}

export default News;