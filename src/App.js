import './App.css';
import React,{ useEffect , useState} from 'react';
import Login from './Login';
import {getTokenFromUrl } from "./spotify"

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash= getTokenFromUrl();
    const _token=hash.access_token;
    // console.log(_token);
    // once i get the token , i make things empty after hash.
    window.location.hash="";
    
    if(_token){
      setToken(_token);
    }

    // console.log(token);
    

    
  }, [token]);
  return (
    <div className="App">
     {
        token ? (<h1>logged in</h1> ):( <Login /> )
      }
    </div>
  );
}

export default App;
