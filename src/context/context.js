import React , { createContext , useContext , useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const [ signUp , setSignUp ] = useState(false);
    
    return <BlogContext.Provider value={{ signUp , setSignUp }}>
        { children }
    </BlogContext.Provider>
}

const useBlog = () => {
    let value = useContext(BlogContext);

    return value;
}

export { BlogProvider , useBlog };