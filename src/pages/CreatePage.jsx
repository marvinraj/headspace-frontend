import React, { useState } from 'react'
import TopNavbar from '../components/TopNavbar'
import usePostStore from '../store/post';

const CreatePage = () => {
    // state to manage new post data
    const [newPost, setNewPost] = useState({
        thoughts: "",
        emotion: "",
        image: ""
    });

    // destructure createPost method from usePostStore hook
    const { createPost } = usePostStore();
    console.log("test");

    // handle creating a new post
    const handleAddPost = async() => {
        const { success, message } = await createPost(newPost);
        console.log("success: ", success);
        console.log("message: ", message);

        // reset after adding new post
        setNewPost({ thoughts:"", emotion:"", image:"" })
    }

    return (
        <main>
            <TopNavbar/>
            <div className="create-card">
                <h3 className='create-title mb-5'>what's on your mind?</h3>
                <div className="create-inputs flex flex-col">
                    <input className='p-4 my-1 mb-4' type="text" placeholder='your thoughts...' name='thoughts' value={newPost.thoughts} 
                        onChange={(e) => setNewPost({ ...newPost, thoughts: e.target.value })}/>
                    <input className='p-4 my-1 mb-4' type="text" placeholder='feeling...' name='emotion' value={newPost.emotion}
                        onChange={(e) => setNewPost({ ...newPost, emotion: e.target.value })} />
                    <input className='p-4 my-1 mb-4' type="text" placeholder='image url...' name='image' value={newPost.image}
                        onChange={(e) => setNewPost({ ...newPost, image: e.target.value })} />
                </div>
                <button className='btn-post text-sm font-bold py-2 px-6' onClick={handleAddPost}>Post</button>
            </div>
        </main>
  )
}

export default CreatePage