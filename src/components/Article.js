import React from 'react';

import classes from './NewsItems.module.css'

function Article(props) {

    return (
        <div className={classes.news_items}>
            {props.articles && props.articles.map((article, i) => <div className={classes.news} style={{ width: "18rem" }} key={i}>
                <img src={article.urlToImage} className={classes.news_img_top} alt="{article.author}"></img>
                <div className={classes.news_body}>
                    <h5 className={classes.news_title}>{article.author}</h5>
                    <p className={classes.news_text}>{article.content}</p>
                    <a href="/" className="btn btn-primary">Go Back</a>
                </div>
            </div>
            )}
        </div>
    );
}

export default Article;