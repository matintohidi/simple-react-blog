import React , { createContext , useContext , useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const [ headerAndFooterDisplay , setHeaderAndFooterDisplay ] = useState(false);
    const [ articlesStat , setArticlesStat ] = useState('published');
    
    return <BlogContext.Provider value={{ headerAndFooterDisplay , setHeaderAndFooterDisplay , articlesStat , setArticlesStat }}>
        { children }
    </BlogContext.Provider>
}

const useBlog = () => {
    let value = useContext(BlogContext);

    return value;
}

export { BlogProvider , useBlog };