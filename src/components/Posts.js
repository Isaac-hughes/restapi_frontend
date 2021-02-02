import React, { useState, useEffect } from "react";

const Posts = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/posts")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(JSON.stringify(result));
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])
    

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        // add cool loading thing
        return <div>Loading...</div>;
    } else {
        return (
            <div className="postContent">
                {items.results && items.results.map((item, index) => {
                return (
                    <div className="tileContent">
                        <div className="content">
                            <h1 key={index}>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                    </div>
                )})}
            </div>
        );
    }   
}

export default Posts;