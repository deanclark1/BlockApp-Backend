const User = require('../models/user')

/**
 * what are we doing?
 * ------------------
 * 1. Get user input
 * 2. save the data
 * 
 * input ==> firstName, lastName, email, password
 * request.body = {
 *  firstName: "",
 *  lastName: "",
 *  email: "",
 *  password: ""
 * }
 * 
 * return
 * ------
 * {
 *  message: '',
 *  user: ""
 * }
 * @param {*} request
 * @param {*} response
 */


const authCtrl = {}

// middleware function
authCtrl.signup = async ( request, response) => {
    const { firstName, lastName, email, password } = request.body;
    // create user Object
    const user = User({ firstName, lastName, email, password })

    try {
        const newUser = await user.save()
        response.send({
            message: 'User created successfully',
            newUser
        })
    } catch ( exception ){
        response.status(500).send({ error: 'Email already used'})
    }

} 

authCtrl.login = async ( request, response ) => {
    const { email, password } = request.body

    try {
        let newUser = await User.findOne( { email })
        if(!newUser){
           return response.status(400).send({message: 'user not found'})
        }
        const isMatch = await (password === newUser.password )

        if(!isMatch){
            return response.status(400).send({message: 'incorrent password'})
        }
        response.status(200).send({ message: 'Login sucessful'})

    } catch ( exception ){
        response.status(500).send({ error: 'Server Error'})
        console.log(exception)
    }
}





module.exports = authCtrl