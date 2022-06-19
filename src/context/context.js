import React , { createContext , useContext , useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const [ headerAndFooterDisplay , setHeaderAndFooterDisplay ] = useState(false);
    const [ filterArticle , setFilterArticle ] = useState({ results:[] });

    const value = { headerAndFooterDisplay , setHeaderAndFooterDisplay , filterArticle , setFilterArticle };
    
    return <BlogContext.Provider value={value}>
        { children }
    </BlogContext.Provider>
}

const useBlog = () => {
    let value = useContext(BlogContext);

    return value;
}

export { BlogProvider , useBlog };