import React, { useEffect } from 'react'
import TopNavbar from '../components/TopNavbar'
import Post from '../components/Post'
import usePostStore from '../store/post';

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
        </>
    )
}

export default HomePage