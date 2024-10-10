import { create } from "zustand";

// this whole file is a 'store'

// custom hook called usePostStore
const usePostStore = create((set) => ({ // set here is used to modify the state of a variable or object
    // initial state: array of posts details such as "thoughts", "emotion" and "image"
    posts: [],

    // actions: functions that modify the state
    // 1 - update the posts state with provided array
    setPosts: (posts) => set({ posts }),

    // 2 - create a new post
    createPost: async(newPost) => {
        // validates required fields in new post
        if(!newPost.thoughts || !newPost.emotion || !newPost.image) {
            return { success: false, message: "please fill in all fields!"}
        }
        // fetches data from "/api/posts" endpoint with POST method
        const res = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });
        // parse the response as json
        const data = await res.json();
        // update the posts state by adding the newly created post
        set((state) => ({ posts: [...state.posts, data.data] }));
        // return success message
        return { success: true, message: "post created successfully!"};
    },

    // 3 - fetch all posts
    fetchPosts: async () => {
        // fetches data from "/api/posts" endpoint with GET method
        const res = await fetch("/api/posts");
        // parse the response as json
        const data = await res.json();
        // update the posts state with the fetched data
        set({ posts: data.data })
    },

    // 4 - delete a post
    deletePost: async (pid) => {
        // fetches data from "/api/posts/pid" endpoint with DELETE method
        const res = await fetch(`/api/posts/${pid}`, {
            method: "DELETE"
        });
        // parse the response as json
        const data = await res.json();
        // check if deletion is unsuccessful
        if (!data.success) {
            return { return: false, message: data.message };
        }
        // updates the posts state by filtering out the deleted post
        set(state => ({ posts: state.posts.filter(post => post._id !== pid) }));
    },

    // 5 - update a post
    updatePost: async (pid, updatedPost) => {
        // fetches data from "/api/posts/pid" endpoint with PUT method
        const res = await fetch(`/api/posts/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
        });
        // parse the response as json
        const data = await res.json();
        // check if deletion is unsuccessful
        if (!data.success) {
            return { return: false, message: data.message };
        }
        set(state => ({
            posts: state.posts.map(post => post._id === pid ? data.data : post)
        }));
    }
}));

export default usePostStore;
