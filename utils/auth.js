const jwt               = require('jsonwebtoken')
const bcrypt            = require('bcryptjs')

const generateToken = (id, email, name, password ) => {
    const token = jwt.sign({ id, email, name, password }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
    
    return token
}

const cookieConfig = () => {
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    
    return cookieOptions
}

const hashedPassword = async(password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    return hash
}

module.exports = {
    generateToken,
    cookieConfig,
    hashedPassword
}