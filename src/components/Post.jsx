import React, { useState } from 'react'
import usePostStore from '../store/post';

const Post = ({post}) => {

    // state for the modal
    const [showModal, setShowModal] = useState({ isHidden: true })

    // state for updated post
    const [updatedPost, setUpdatedPost] = useState(post)

    // function to toggle view of modal
    function toggleHiddenModal() {
        setShowModal({ isHidden: !showModal.isHidden })
    }

    // object named style for modal div style
    const style = { visibility: showModal.isHidden ? 'hidden': 'visible'};
    // explanation for the code above -->
    // if showModal.isHidden is true, then visibility=hidden, if false then visibility=visible

    // destructure deletePost function from the usePostStore hook
    const {deletePost, updatePost} = usePostStore();

    // handle deleting the post
    const handleDeletePost = async (pid) => {
        // calls deletePost function with post id
        const {success, message} = await deletePost(pid);
        console.log("success: ", success);
        console.log("message: ", message);
    }

    const handleUpdatePost = async (pid, updatedPost) => {
        updatePost(pid, updatedPost);
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
                    <button onClick={() => toggleHiddenModal()}>Edit</button>
                </div>
            </div>
            <img src={post.image} alt="random alt" />

            {/* modal */}
            <div style={style} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[600px] flex flex-col p-6'>
                    <div className='cursor-pointer place-self-end' onClick={() => toggleHiddenModal()}>
                        X
                    </div>
                    <div className='modal-title text-white text-lg text-center'>
                        Update Thoughts
                    </div>
                    <div className="modal-content flex flex-col justify-center">
                        <h3 className='modal-input-title'>thoughts:</h3>
                        <input className='input-modal p-2 my-1 mb-4' type="text" placeholder='thoughts..' name='thoughts' value={updatedPost.thoughts} onChange={(e) => setUpdatedPost({ ...updatedPost, thoughts: e.target.value })} />
                        <h3 className='modal-input-title'>feeling:</h3>
                        <input className='input-modal p-2 my-1 mb-4' type="text" placeholder='feeling..' name='emotion' value={updatedPost.emotion} onChange={(e) => setUpdatedPost({ ...updatedPost, emotion: e.target.value })} />
                        <h3 className='modal-input-title'>image url:</h3>
                        <input className='input-modal p-2 my-1 mb-4' type="text" placeholder='image..' name='image' value={updatedPost.image} onChange={(e) => setUpdatedPost({ ...updatedPost, image: e.target.value })} />
                    </div>
                    <div className="modal-footer my-6 flex self-end">
                        <button className='btn-update text-sm font-bold py-2 px-4 mr-2' onClick={() => { handleUpdatePost(post._id, updatedPost); toggleHiddenModal() }}>Update</button>
                        <button className='btn-cancel text-sm font-bold py-2 px-4' onClick={() => toggleHiddenModal()}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post