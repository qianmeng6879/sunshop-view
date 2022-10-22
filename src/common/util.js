const EMAIL_PATTERN = /^[a-zA-Z]\w+@[a-zA-Z]+\.[a-zA-Z]+$/
const MOBILE_PATTERN = /^1[3-9]\d{9}$/


function isEmail(value) {
    let result = EMAIL_PATTERN.test(value)
    return result
}

function isMobile(value) {
    if (value) {
        return MOBILE_PATTERN.test(value)
    }
    return false
}

function hasLength(value) {
    if ((typeof value) === "string") {
        if (value.length > 0) {
            return true
        }
    }
    return false;
}