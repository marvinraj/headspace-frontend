import { create } from "zustand";

const usePostStore = create((set) => ({
    posts: [],
    setPosts: (posts) => set({ posts }),
    createPost: async(newPost) => {
        if(!newPost.thoughts || !newPost.emotion || !newPost.image) {
            return { success: false, message: "please fill in all fields!"}
        }
        const res = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });
        const data = await res.json();
        set((state) => ({ posts: [...state.posts, data.data] }));
        return { success: true, message: "post created successfully!"};
    },
    fetchPosts: async () => {
        const res = await fetch("/api/posts");
        const data = await res.json();
        set({ posts: data.data })
    },
    deletePost: async (pid) => {
        const res = await fetch(`/api/posts/${pid}`, {
            method: "DELETE"
        });
        const data = await res.json();
        if (!data.success) {
            return { return: false, message: data.message };
        }
        set(state => ({ posts: state.posts.filter(post => post._id !== pid) }));
    }
}));

export default usePostStore;
