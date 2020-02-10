 const logObject = (keys, log) => {
    var obj = {}
    for (var i = 0; i < keys.length; i++) {
        obj[keys[i]] = log[i]
    }
    return obj
}

export default logObject
