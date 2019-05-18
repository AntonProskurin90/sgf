/*module.exports = (() => {
    try {
        let m = require('jschardet')
        if (m == null) throw new Error()

        return m
    } catch(err) {
        return {
            detect: () => ({encoding: 'UTF-8'})
        }
    }
})()*/

module.exports = (() => {
    return { detect: () => ({encoding: 'UTF-8'}) }    
})()
