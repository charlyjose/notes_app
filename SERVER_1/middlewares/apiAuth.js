// const User = require('../controllers/userController')

// module.exports = {
//     async apiAuth(req, res, next) {
//         var auth = await User.auth_key(req)
//         if (auth == true) {
//             console.log('\n\nUSER AUTHORIZED WITH KEY: ', req.body.api_key)
//             next()
//         }
//         else {
//             return res.status(400).send({ error: true, message: 'User not authorised', try: 'Invalid API Key' })
//         }
//     }
// }


// // var rpc_client_1 = require('../middlewares/rpc_client_1')

// // module.exports = {
// //     async apiAuth(req, res, next) {
// //         var auth = await rpc_client_1.auth_key(req, res)
// //         console.log('\n\n REPLY 3: ', auth)
// //         if (auth == true) {
// //             console.log('\n\nUSER AUTHORIZED WITH KEY: ', req.body.api_key)
// //             next()
// //         }
// //         else {
// //             return res.status(400).send({ error: true, message: 'User not authorised', try: 'Invalid API Key' })
// //         }
// //     }
// // }