export default function update(state = "", action){
    switch (action.type) {
        case 'UPDATE_SCREEN':
            return action.payload;
        default:
            return state;
            
    }
}