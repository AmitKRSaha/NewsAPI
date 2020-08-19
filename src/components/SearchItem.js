import React, { useState, useEffect, useRef } from 'react';


function SearchItem(props) {

    const [author, setAuthor] = useState('');
    const inputRef = useRef('');
    useEffect(() => {
        let timer = setTimeout(() => {
            if (author === inputRef.current.value) {
                props.SearchbyAuthor(author);
            }
        }, 500);
        return () => clearInterval(timer);
    }, [author]);

    return (
        <div className="input-group mb-3">
            <input type="text"
                className=" input-control form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={author}
                ref={inputRef}
                onChange={(e) => setAuthor(e.target.value)}
            />
        </div>
    );
}

export default SearchItem;

