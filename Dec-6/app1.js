const stringUtils = require('./stringUtils');
try {
    console.log(stringUtils.reverse ("alo"))
    console.log(stringUtils.capitalize("lalal"))
    console.log(stringUtils.truncate("this is a long string", 10) )
    console.log(stringUtils.reverse(123))
} catch (error) {
    console.error ('Error:', error.message);
}
