import React, { useState, useEffect, useRef } from 'react';


function SearchItem({ SearchbyAuthor }) {

    const [author, setAuthor] = useState('');
    const inputRef = useRef('');
    useEffect(() => {
        let timer = setTimeout(() => {
            if (author === inputRef.current.value) {
                SearchbyAuthor(author);
            }
        }, 500);
        return () => clearInterval(timer);
    }, [author, SearchbyAuthor]);

    return (
        <div className="input-group mb-3">
            <input type="text"
                className=" input-control form-control"
                placeholder="Please provide author name"
                aria-label="Please provide author name"
                aria-describedby="button-addon2"
                value={author}
                ref={inputRef}
                onChange={(e) => setAuthor(e.target.value)}
            />
        </div>
    );
}

export default SearchItem;

