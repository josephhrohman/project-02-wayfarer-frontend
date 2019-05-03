import React from 'react';
import '../css/createpost.css'

function CreatePost (props) {
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
                <form>
                    <label>Title</label>
                    <input className="title" type="text"></input>
                    <input className="message" type="text"></input>
                    <input className="submit" type="submit"></input>
                </form>
                <button onClick={props.close}>Exit</button>

            </div>
        </>
    )

}

export default CreatePost;