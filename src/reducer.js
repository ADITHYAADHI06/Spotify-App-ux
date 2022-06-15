export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // remove after devloping fishined .
    token:"BQB-5J9JiiXAgRCxqR8G-bQgLCAGZiXUNreMWNYyaUvxw-celnHdGt2vJEALAyResncn7jJw9_-7qjPcUfMI6_5vILRFCLXbvZnYrlPAoECqvqu1vWkxeFF4odekSDCDBv2aZbKIVzOWLwG_ghjp2hqH7B5C0ptJSvgO1FJ-coa07CINw7HjYRPEym5-DUJginFdi512icPzhUcty56yXA",
    // token:"",
   

};

const reducer=(state,action)=>{
  // console.log(action);

// Action --> type, [playload]

  switch(action.type){
    case 'SET_USER':
        return {
            // ! this codes decide the new state look 
            // ! keep same the current state
            ...state,
            user:action.user,
            // update : users action only
        };
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token,
                // update : users action only
            };
    default :
       return state;

  }

}
export default reducer;
