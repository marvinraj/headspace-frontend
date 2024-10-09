import React from 'react'
import usePostStore from '../store/post';

const Post = ({post}) => {

    // destructure deletePost function from the usePostStore hook
    const {deletePost} = usePostStore();

    // handle deleting the post
    const handleDeletePost = async (pid) => {
        // calls deletePost function with post id
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
                <h5>
                    <span>mood:</span> {post.emotion}
                </h5>
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