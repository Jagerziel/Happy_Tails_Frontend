// If any fields are missing, the function will return true
export function checkAllFields ( array ) {
    let ct = 0
    let blank = 0
    while (ct < array.length) {
        if (array[ct] === "") blank++
        ct++
    }
    if (blank > 0) return true
    return false
}

// If all fields are missing, the function returns true
export function checkOneField ( array ) {
    let ct = 0
    while (ct < array.length) {
        if (array[ct] !== "") break
        ct++
    }
    if (ct === array.length) return true
    return false
}