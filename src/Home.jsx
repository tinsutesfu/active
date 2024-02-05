import { useContext } from 'react';
import Feed from './Feed';
import Datacontext from './Datacontext';
//import { TiSocialGithub } from 'react-icons/ti';


const Home = () => {

    const { searchResults }=useContext(Datacontext)
    return (
        <>
         <img src='src/im/img.jpg' alt='no image' className='git'/>
        <main className="Home">
           
            <div className='hit'>
            {searchResults.length ? (
                <Feed posts={searchResults} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
            </div>
        </main>
        </>
    )
}

export default Home;