let lastID = 0

// EXAMPLE USING IF/ELSE STATEMENT
function reducer (state = [], action) {
    if (action.type === 'BUG_ADDED') {
        return [
            ...state, {
                id: ++lastID,
                description: action.payload.description,
                resolved: false,
            }
        ]
    } else if (action.type === 'BUG_REMOVED') {
        return state.filter((bug) => {
            bug.id !== action.payload.id
        })
    }

    return state
}


// EXAMPLE USING SWITCH STATEMENT
function reducer (state = [], action) {
    switch(action.type) {
        case "BUG_ADDED":
            return [
                ...state, {
                    id: ++lastID,
                    description: action.payload.description,
                    resolved: false,
                }
            ]
        case "BUG_REMOVED":
            return state.filter((bug) => {
                bug.id !== action.payload.id
            })
        default: return state
    }
}