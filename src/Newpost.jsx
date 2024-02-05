import React, { useContext, useState } from 'react'
import Datacontext from './Datacontext';
import api from './api/posts';
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';


const Newpost = () => {

    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [postman, setPostman] = useState('');
    const {posts,setPosts}=useContext(Datacontext);
    const navigate= useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody,postedby:postman };
        try {
          const response = await api.post('/posts', newPost);
          const allPosts = [...posts, response.data];
          setPosts(allPosts);
          setPostTitle('');
          setPostBody('');
          setPostman('');
          navigate('/');
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      } 
  return (
    <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                 <label htmlFor="postman">posted by:</label>
                <input
                    id="postman"
                    type="text"
                    required
                    value={postman}
                    onChange={(e) => setPostman(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
  )
}

export default Newpost
