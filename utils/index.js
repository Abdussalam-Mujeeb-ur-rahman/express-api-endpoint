function validateType(name) {
    if ((typeof name) != 'string') {
        return false
    };
    return true;
};

module.exports = {
    validateType
}