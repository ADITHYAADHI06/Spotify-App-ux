export const authEndpoint=`https://accounts.spotify.com/authorize`;
const clientId = `6ded2914985b45628510342c80a7b642`;
const redirectUri=`http://localhost:3000/`;

const scopes=[
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];
export const getTokenFromUrl=()=>{
    // http://localhost:3000/#access_token=BQCmSqQ-mY5DneBI4YZFWfjetrirH_syiIsydU7MxArigahSUbwjM7Qt0fD8GyFYF_LxR0QOs-5a-nIRJGPwL79Z7ytuSD3QIQegSuZkMmxSiOR9KHsyD5y2OTljzSUPaJRHA9AFMEK8Wuzrjm9IFDcJrtT7QohKLqBbx8OTeu68qSkzPtmkjRbaeQ&token_type=Bearer&expires_in=3600
    return window.location.hash
    // #access_token=BQCmjetrirH_syiIsydU7MxArigahSUbPwL79Z7ytuSD3QIQegSuZkMmxSiOR9KHsyD5y2OTljzSUPaJRHA9AFMEK8Wuzrjm9IFDcJrtT7QohKLqBbx8OTeu68qSkzPtmkjRbaeQ&token_type=Bearer&expires_in=3600
    .substring(1)
    // access_token=BQjetrirH_syiIsydU7MxArigahSUbwjM7Qt0fD8GyFYF_LxR0QOs-5a-nIRJGPwL79Z7ytuSD3QIQegSuZkMmxSiOR9KHsyD5y2OTljzSUPaJRHA9AFMEK8Wuzrjm9IFDcJrtT7QohKLqBbx8OTeu68qSkzPtmkjRbaeQ&token_type=Bearer&expires_in=3600
    .split("&")
    // [access_token=BQCmSqQ-syD5y2OTljzStT7QohKLqBbxbaeQ ,token_type=Bearer , expires_in=3600]
    .reduce((initial,item)=>{
       var parts=item.split("=");
    // [access_token , BQCmSqQ-syD5y2OTljzStT7QohKLqBbxbaeQ ]
       initial[parts[0]]=decodeURIComponent(parts[1]);
       return initial;  
    },{});
} 



export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

