import './App.css';
import React,{ useEffect } from 'react';
import Login from './Login';
import Player from './Player';
import {getTokenFromUrl } from "./spotify"

import { useDataLayerValue } from './DataLayer';


// ! To get the UserData(musics) from spotify
import SpotifyWebApi from "spotify-web-api-js"
const spotifyApi=new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  
  const[ {user,token} ,dispatch] = useDataLayerValue();
// {user,token}
  useEffect(() => {
    const hash= getTokenFromUrl();
    const _token=hash.access_token;
    // console.log(_token);
    // once i get the token , i make things empty after hash.
    window.location.hash="";
  // console.log(_token);
    
    if(_token){
      // setToken(_token);

      // console.log(_token);
      // in this method users unic token get passed to spotify-web-api
      spotifyApi.setAccessToken(_token);

      dispatch({
        type:'SET_TOKEN',
        token:_token,
      });
      
      // get the user Data from spotify web api
      spotifyApi.getMe()
      .then((user)=> { 
        dispatch({
          type:'SET_USER',
          user:user,
        });

      })
      .catch((e)=>{
        console.log('Something went wrong!', e);
      });

      // ! this method used to get the users playlists 
      spotifyApi.getUserPlaylists().then((playlists)=>{
               dispatch({
                type:'SET_PLAYLISTS',
                playlists:playlists,
               })
      })

    }
          
  }, [dispatch]);
  // user,
  // console.log(user);
  // console.log(token);


  
  


  return (
    <div className="App">
     {
        token ? (<Player spotifyApi={spotifyApi} /> ):( <Login /> )
      }
    </div>
  );
}

export default App;
