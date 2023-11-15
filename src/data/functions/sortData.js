import { timeSelectionOrder } from "../data/data";

export function sortByDateAndTime ( 
    data, // Insert Data to be sorted by name and time 
    command // Command is to show data before today, today forward, all
) {
    // Collator for Sorting
    const collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    });
    // Sort date and time with appending the time
    const sorted = data.sort((a, b) => {
        const a_dateTime = `${a["date"]}-${timeSelectionOrder[a["time"]]}`
        const b_dateTime = `${b["date"]}-${timeSelectionOrder[b["time"]]}`
        return collator.compare(a_dateTime, b_dateTime)
    })
    
    // Identify today's date and set at beginning of day
    let today = new Date()
    today.setHours(0, 0, 0, 0)

    // Return whole sorted array
    if ( command === "all") return sorted
    // Return sorted array up to today's date
    if ( command === "before") {
        const filtered = sorted.filter(( appt ) => {
            const dateForParse = appt["date"].replaceAll("/","-")
            const convertDate = new Date(Date.parse(`${dateForParse}T00:00:00`))
            if (convertDate.getTime() < today.getTime()) {
                return true
            } else {
                return false
            }
        })
        return filtered
    }
    // Return sorted array for today's date and beyond
    if ( command === "after") {
        const filtered = sorted.filter(( appt ) => {
            const dateForParse = appt["date"].replaceAll("/","-")
            const convertDate = new Date(Date.parse(`${dateForParse}T00:00:00`))
            if (convertDate.getTime() < today.getTime()) {
                return false
            } else {
                return true
            }
        })
        return filtered
    }
}


export function sortByDate ( 
    data, // Insert Data to be sorted by name and time 
    dateFieldName, // Name of date field to be sorted
    command // Command is to show data before today, today forward, all
) {
    // Collator for Sorting
    const collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    });
    // Sort date and time with appending the time
    const sorted = data.sort((a, b) => {
        const a_dateTime = `${a[dateFieldName]}T00:00:00`
        const b_dateTime = `${b[dateFieldName]}T00:00:00`
        return collator.compare(a_dateTime, b_dateTime)
    })
    
    // Identify today's date and set at beginning of day
    let today = new Date()
    today.setHours(0, 0, 0, 0)

    // Return whole sorted array
    if ( command === "all") return sorted
    // Return sorted array up to today's date
    if ( command === "before") {
        const filtered = sorted.filter(( item ) => {
            const dateForParse = item[dateFieldName].replaceAll("/","-")
            const convertDate = new Date(Date.parse(`${dateForParse}T00:00:00`))
            if (convertDate.getTime() < today.getTime()) {
                return true
            } else {
                return false
            }
        })
        return filtered
    }
    // Return sorted array for today's date and beyond
    if ( command === "after") {
        const filtered = sorted.filter(( item ) => {
            const dateForParse = item[dateFieldName].replaceAll("/","-")
            const convertDate = new Date(Date.parse(`${dateForParse}T00:00:00`))
            if (convertDate.getTime() < today.getTime()) {
                return false
            } else {
                return true
            }
        })
        return filtered
    }
}
