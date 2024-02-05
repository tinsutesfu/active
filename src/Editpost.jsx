import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Datacontext from './Datacontext';
import {format} from 'date-fns';
import api from './api/posts';

const Editpost = () => {
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const [postman, setPostman] = useState('');
    const navigate= useNavigate();
    const {posts, setPosts}=useContext(Datacontext)
  const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
            setPostman(post.postedby)
        }
    }, [post, setEditTitle, setEditBody,setPostman])

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody,postedby:postman };
        try {
          const response = await api.put(`/posts/${id}`, updatedPost);
          setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
          setEditTitle('');
          setEditBody('');
          navigate('/');
        } catch (err) {
          console.
          log(`Error: ${err.message}`);
        }
      }

    return (
        <main className="NewPost">
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            id="postTitle"
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                         <label htmlFor="postman">posted by:</label>
                <input
                    id="postman"
                    type="text"
                    required
                    value={postman}
                    onChange={(e) => setPostman(e.target.value)}
                />
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )

}

export default Editpost
