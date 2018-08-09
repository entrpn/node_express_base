class TestManager {
    async test(variable) {
        if (variable) {
            return `Hello ${variable}`
        } else {
            return
        }
    }
}

module.exports = TestManager