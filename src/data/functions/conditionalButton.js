// If any fields are missing, the function will return true
export function checkAllFields ( array ) {
    let ct = 0
    let blank = 0
    while (ct < array.length) {
        if (array[ct] === "") blank++
        ct++
    }
    if (blank > 0) {
        return true
    } else {
        return false
    }
}