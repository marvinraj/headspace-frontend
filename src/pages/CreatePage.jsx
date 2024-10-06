import React, { useState } from 'react'
import TopNavbar from '../components/TopNavbar'
import usePostStore from '../store/post';

const CreatePage = () => {
    const [newPost, setNewPost] = useState({
        thoughts: "",
        emotion: "",
        image: ""
    });

    const { createPost } = usePostStore();

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
                <h3>what's on your mind?</h3>
                <div className="create-inputs">
                    <input type="text" placeholder='your thoughts..' name='thoughts' value={newPost.name} 
                        onChange={(e) => setNewPost({ ...newPost, thoughts: e.target.value })}/>
                    <input type="text" placeholder='emotion' name='emotion' value={newPost.emotion}
                        onChange={(e) => setNewPost({ ...newPost, emotion: e.target.value })} />
                    <input type="text" placeholder='image' name='image' value={newPost.image}
                        onChange={(e) => setNewPost({ ...newPost, image: e.target.value })} />
                </div>
                <button onClick={handleAddPost}>Post</button>
            </div>
        </main>
  )
}

export default CreatePage