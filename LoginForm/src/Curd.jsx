import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Curd() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function createPost() {
        axios
            .post(baseURL, {
                title: "Hello World!",
                body: "This is a new post."
            })
            .then((response) => {
                setPost(response.data);
            });
    }
    function updatePost() {
        axios
            .put(`${baseURL}/1`, {
                title: "Welcome!",
                body: "This is an updated post."
            })
            .then((response) => {
                setPost(response.data);
            });
    }
    function deletePost() {
        axios
            .delete(`${baseURL}/1`)
            .then(() => {
                // alert("Post deleted!");
                setPost(null)
            });
    }

    if (!post) return "No post!"

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button onClick={createPost}>Create Post</button>
                <button onClick={updatePost}>Update Post</button>
                <button onClick={deletePost}>Delete Post</button>
            </div>
        </div>
    );
}


