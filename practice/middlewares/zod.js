const zod = require('zod');

const Userschema = zod.object({
    username: zod.string().min(5),
    password: zod.string().min(6)
});

module.exports = {
    Userschema
}