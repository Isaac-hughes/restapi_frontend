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
            setItems(result);
            }  
        )
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
            console.log(error)
        })
    }, [])
    

    const timeChanger = (time) => {
        let arr = time.split("")
        arr.splice(10,1)
        arr.splice(10, 0, " ")
        arr.splice(16,8)
        let res = arr.join("")
        return res
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        // add cool loading thing
        return <div>Loading...</div>;
    } else {
        return (
            <div className="postContent">
                {items && items.map((item, index) => {
                return (
                    <div className="tileContent">
                        <div className="content">
                            <h1 key={index} className="postTitle">{item.title}</h1>
                            <p className="postContent">{item.content}</p>
                            <p className="postContent">{timeChanger(item.createdAt)}</p>
                        </div>
                    </div>
                )})}
            </div>
        );
    }   
}

export default Posts;