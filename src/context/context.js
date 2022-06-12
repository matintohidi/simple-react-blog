import React , { createContext , useContext , useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const [ headerAndFooterDisplay , setHeaderAndFooterDisplay ] = useState(false);
    const [ articlesStat , setArticlesStat ] = useState('published');
    const [ data , setData ] = useState({ results:[] });

    const value = { headerAndFooterDisplay , setHeaderAndFooterDisplay , articlesStat , setArticlesStat , data , setData };
    
    return <BlogContext.Provider value={value}>
        { children }
    </BlogContext.Provider>
}

const useBlog = () => {
    let value = useContext(BlogContext);

    return value;
}

export { BlogProvider , useBlog };