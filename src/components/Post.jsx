import React from 'react'
import usePostStore from '../store/post';

const Post = ({post}) => {

    const {deletePost} = usePostStore();

    const handleDeletePost = async (pid) => {
        const {success, message} = await deletePost(pid);
        console.log("success: ", success);
        console.log("message: ", message);
    }

    return (
        <div className='thoughts'>
            <div className="content-container">
                <h3>
                    {post.thoughts}
                </h3>
                <div className="buttons">
                    <button onClick={() => handleDeletePost(post._id)}>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
            <img src={post.image} alt="random alt" />
        </div>
    )
}

export default Post