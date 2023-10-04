import React,{useState} from 'react';
import { Navigate,useNavigate} from 'react-router-dom';
import CounterApplication from '../CounterComponent';
import Cookie from 'js-cookie';
import './index.css'

function Home(){
  
    const [components, setComponents] = useState([]);
    const [componentCount, setComponentCount] = useState(0);
  
    const handleAddComponent = () => {
      const newComponent = (
        <CounterApplication key={componentCount} number={componentCount + 1} />
      );
  
      setComponents([...components, newComponent]);
      setComponentCount(componentCount + 1);
    };

  const token = Cookie.get('jwt_token');


  const navigate = useNavigate()

  const onClickLogout = () => {


    Cookie.remove('jwt_token')
    navigate('/login');
  }

 
 
  if (token === undefined) {
    console.log('User is not authenticated. Redirecting to /login');
    return <Navigate to="/login" replace />;
  }

  return(
    <div className="Home-Container">
        
        <div className="navbar">
            <h1>Home Page</h1>
            <h1>Counter Application</h1>
            <button onClick={onClickLogout} type="button" className="Home-Button">Logout</button>
        </div>
        <button onClick={handleAddComponent}>Add Component</button>
        {components}
    </div>
  );
};

export default Home;