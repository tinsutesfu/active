
import Home from './Home';
import NewPost from './Newpost';
import PostPage from './Postpage';
import About from './About';
import Missing from './Missing';
import { Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Editpost from './Editpost';
import { Dataprovider } from './Datacontext';
import Contactus from './Contactus';

function App() {
  

  return (
  <Dataprovider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home  />}/>
        
        <Route path="/post">
           <Route index element={<NewPost
            
            
           />}/>
           <Route path=':id'>
             <Route index element={<PostPage />}/>
             <Route path='edit/:id' element={<Editpost/>}/>
            </Route>
           
        </Route>
        
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contactus/>} />
        <Route path="*" element={<Missing/>} />
      </Route>
    </Routes>
    
  </Dataprovider>
      
  );
}

export default App;