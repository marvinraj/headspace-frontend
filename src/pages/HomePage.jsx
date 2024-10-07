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
        <>
            <TopNavbar/>
            {posts.map((post) => (
                <Post key={post._id} post={post}/>
            ))}
            <Link to="/create" className='new-post'>new thoughts</Link>
        </>
    )
}

export default HomePage