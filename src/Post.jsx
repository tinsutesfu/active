import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    return (
        <article className="post">
            <Link to={`/post/${post.id}`}>
                <h3>Title:{post.title}</h3>
                <p className="postDate">{post.datetime}</p>
            </Link>
            <p className="postBody">{
               // (post.body).length <= 25 ? 
               post.body
                    //: `${(post.body).slice(0, 25)}...`
            }</p>
            <h6>posted by:{post.postedby}</h6>
        </article>
    )
}

export default Post;