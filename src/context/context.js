import React , { createContext , useContext , useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const [ SignUp , setSignUp ] = useState(false);
    
    return <BlogContext.Provider value={{ SignUp , setSignUp }}>
        { children }
    </BlogContext.Provider>
}

const useBlog = () => {
    let value = useContext(BlogContext);

    return value;
}

export { BlogProvider , useBlog };