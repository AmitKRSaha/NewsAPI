import React, { useEffect, useState } from 'react';
import {
    useParams
} from "react-router-dom";
import axios from 'axios';

import Article from './Article';

const DetailNews = (props) => {

    let { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [showedArticles, setShowedArticles] = useState();

    useEffect(() => {
        axios.get('http://localhost:3001/details/' + id)
            .then(response => response)
            .then(res => {
                console.log(res.data)
                setLoading(false);
                setShowedArticles(res.data);
            });
    }, [id]);

    return (<div className="news">
        {loading ? "Loading..." : <Article articles={showedArticles} />}
    </div>)
};


export default DetailNews;