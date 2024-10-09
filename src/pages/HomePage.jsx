import React, { useEffect } from 'react'
import TopNavbar from '../components/TopNavbar'
import Post from '../components/Post'
import usePostStore from '../store/post';
import { Link } from 'react-router-dom'

const HomePage = () => {

    // destructure usePostStore hook
    const { fetchPosts, posts } = usePostStore();

    // fetches posts data when the component mounts
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    console.log("posts: ", posts)

    return (
        <section className='home'>
            <div>
                <TopNavbar/>
                {/* use .map() to map out every post from the posts array */}
                {posts.map((post) => (
                    <Post key={post._id} post={post}/>
                ))}
            </div>
            <Link to="/create" className='new-post'>+</Link>
        </section>
    )
}

export default HomePage