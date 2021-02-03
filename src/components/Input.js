import React, { useState } from "react";

const InputField = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
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

    const handleSubmit = (e) => {
        e.preventDefault()
        savePost()
    }


    const savePost = async () => {
        try {
          const response = await fetch(`http://localhost:5000/posts/${inputUserID}`,
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({author: inputUserID, title: inputTitle, content: inputContent})
          });
          const data = await response.json();
          console.log(data)

          updateInputContent("")
          updateInputTitle("")
          updateInputUserID("")
        } catch (error) {
          console.log("I didn't post")
          console.log(error)
        }
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