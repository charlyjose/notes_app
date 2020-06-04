const Profile = require('../models/profile')

module.exports = {

    // FIRST NAME
    // LAST NAME
    // ADDRESS
    create: async (req, userId) => {
        if (!req.body.firstname || !req.body.lastname || !req.body.address) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }
        await Profile.create({
            userId: userId,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address
        })
        return
    }
}