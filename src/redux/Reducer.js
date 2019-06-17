const addPost = (state= [], action) =>{
    switch(action.type){
        case 'ADD':
            return state.concat([action.name]);
        default: 
            return state;
    }
}

export default addPost;