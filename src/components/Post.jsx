import React, { useState } from 'react'
import usePostStore from '../store/post';

const Post = ({post}) => {

    // state for the modal
    const [showModal, setShowModal] = useState({ isHidden: true })

    // function to toggle view of modal
    function toggleHiddenModal() {
        setShowModal({ isHidden: !showModal.isHidden })
    }

    // object named style for modal div style
    const style = { visibility: showModal.isHidden ? 'hidden': 'visible'};
    // explanation for the code above -->
    // if showModal.isHidden is true, then visibility=hidden, if false then visibility=visible

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
                    <button onClick={toggleHiddenModal}>Edit</button>
                </div>
            </div>
            <img src={post.image} alt="random alt" />

            {/* modal */}
            <div style={style} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[600px] flex flex-col'>
                    <div className='place-self-end'>
                        X
                    </div>
                    <div className='bg-white text-stone-950 p-2'>
                        update thoughts
                    </div>
                    <div className="modal-content">
                        <input type="text" placeholder='thoughts..' />
                        <input type="text" placeholder='feeling..' />
                        <input type="text" placeholder='image..' />
                    </div>
                    <div className="modal-footer">
                        <button>update</button>
                        <button onClick={toggleHiddenModal}>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post