const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content:'bla bla'},
        {id: '2', title: 'collect all the stars', content:'bla bla2'},
        {id: '3', title: 'egg hubt with yoshi', content:'bla bla3'}
    ]
}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project', action.project)
    }    
    return state;
}

export default projectReducer;