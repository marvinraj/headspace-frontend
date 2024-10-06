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
        <main>
            <h3>
                {post.thoughts}
            </h3>
            <img src={post.image} alt="random alt" />
            <button onClick={() => handleDeletePost(post._id)}>delete</button>
            <button>edit</button>
        </main>
    )
}

export default Post