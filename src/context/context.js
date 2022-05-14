import React , { createContext , useContext , useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const [ headerAndFooterDisplay , setHeaderAndFooterDisplay ] = useState(false);
    
    return <BlogContext.Provider value={{ headerAndFooterDisplay , setHeaderAndFooterDisplay }}>
        { children }
    </BlogContext.Provider>
}

const useBlog = () => {
    let value = useContext(BlogContext);

    return value;
}

export { BlogProvider , useBlog };