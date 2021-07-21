export default function(state = "", action){
    switch (action.type) {
        case 'UPDATE_SCREEN':
            return action.payload;
            break;
        default:
            return state;
            
    }
}