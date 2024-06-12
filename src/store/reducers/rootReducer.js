const initState = {
    users: [
        { id: 1, name: 'Hoang' },
        { id: 2, name: 'Huyen' },
        { id: 3, name: 'Hoang Huyen' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users.filter(item => item.id !== action.payload.id);

            return {
                ...state, users
            };
        case 'ADD_USER':
            let id = Math.ceil(Math.random() * 1000);
            let user = {
                id: id,
                name: `RandamName${id}`
            }

            return {
                ...state, users: [...state.users, user]
            };

        default:
            return state;
    }
}

export default rootReducer;