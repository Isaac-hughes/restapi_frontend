import React, { useState, useEffect } from "react";

const InputField = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [inputTitle, updateInputTitle] = useState("")
    const [inputContent, updateInputContent] = useState("")
    const [inputUserID, updateInputUserID] = useState("")

    const inputTitleUpdate = (event) => {
        let val = event.target.value;
        updateInputTitle(val)
      }

    const inputContentUpdate = (event) => {
        let val = event.target.value;
        updateInputContent(val)
      }

    const inputIDUpdate = (event) => {
        let val = event.target.value;
        updateInputUserID(val)
      }

    const handleSubmit = () => {
        let x = inputTitle
        let y = inputContent
        let z = inputUserID
        let jsonSting = {"author": `${z}`, "title": `${x}`, "content": `${y}`}
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        // add cool loading thing
        return <div>Loading...</div>;
    } else {
        return (
            <div className="input">
               <form onSubmit={handleSubmit}>
                   <input name="title" type="text" placeholder="Title" autoComplete="off" onChange={inputTitleUpdate}></input>
                   <input name="content" type="text" placeholder="Content" autoComplete="off" onChange={inputContentUpdate}></input>
                   <input name="inputField" type="text" placeholder="User Id" autoComplete="off" onChange={inputIDUpdate}></input>
                   <button className="submitButton" type="submit">Post</button>
               </form>
            </div>
        );
    }   
}

export default InputField;