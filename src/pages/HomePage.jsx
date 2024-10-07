import React, { useEffect } from 'react'
import TopNavbar from '../components/TopNavbar'
import Post from '../components/Post'
import usePostStore from '../store/post';
import { Link } from 'react-router-dom'

const HomePage = () => {

    const { fetchPosts, posts } = usePostStore();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    console.log("posts: ", posts)

    return (
        <section className='home'>
            <div>
                <TopNavbar/>
                {posts.map((post) => (
                    <Post key={post._id} post={post}/>
                ))}
            </div>
            <Link to="/create" className='new-post'>+</Link>
        </section>
    )
}

export default HomePage