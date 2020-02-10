const parse = line => {
    var parsed = line
        .replace(/\[/g, "|[")
        .replace(/\]/g, "]|")
        .replace(/ "/g, ' |"')
        .replace(/" /g, '"| ')
        .replace(/\| \|/g, "|")
        .split(/\|/g)
        .map(x => x.trim())
        .map(x => (/\[|"/.test(x[0]) ? [x] : x.split(/ /g)))
        .reduce((a, x) => a.concat(x), [])
        .map(x => x.replace(/^\[|\]$|^"|"$/g, ""))

    return parsed
};

export default parse
