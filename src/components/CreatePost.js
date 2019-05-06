import React from 'react';
import '../css/createpost.css'
import axios from 'axios';

function CreatePost (props) {

    const handlePost = (e) => {
        e.preventDefault()
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        axios({
            method: "post",
            url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/posts',
            data: {
                title,
                content
            },
            withCredentials: true
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
    }



    return (
        <>
            <div className="createpost">
                <h2>Create a new post</h2>
                <select className="dropdown">
                    <option value="London">London</option>
                    <option value="Sydney">Sydney</option>
                    <option value="SanFancisco">San Fancisco</option>
                    <option value="NewYork">New York</option>
                </select>
                <form className="mypost" onSubmit={handlePost}>
                    <label>Title</label>
                    <input className="title" id="title" name="title"type="text"></input>
                    <input className="message" id="content" name="content" type="text"></input>
                    <input className="submit" type="submit"></input>
                <button onClick={props.close}>Exit</button>
                </form>

            </div>
        </>
    )

}

export default CreatePost;