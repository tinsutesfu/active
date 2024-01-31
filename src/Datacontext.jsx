import { createContext, useEffect, useState } from "react";
import api from './api/posts';




const Datacontext=createContext({});

export const Dataprovider = ({children}) => {

        const [posts, setPosts] = useState([])
        const [search, setSearch] = useState('');
        const [searchResults, setSearchResults] = useState([]);
        
       ;

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await api.get('/posts');
            setPosts(response.data);
          } catch (err) {
            if (err.response) {
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            } else {
              console.log(`Error: ${err.message}`);
            }
          }
        }
    
        fetchPosts();
      }, [])

      useEffect(() => {
        const filteredResults = posts.filter((post) =>
          ((post.body).toLowerCase()).includes(search.toLowerCase())
          || ((post.title).toLowerCase()).includes(search.toLowerCase()));
    
        setSearchResults(filteredResults.reverse());
      }, [posts, search]);

      
    
      
    
      
  return (
   <Datacontext.Provider value={{
    search, setSearch,posts,searchResults,setSearchResults,setPosts,
    
    
   }}>
 {children}
   </Datacontext.Provider>
  )
}

export default Datacontext;
 