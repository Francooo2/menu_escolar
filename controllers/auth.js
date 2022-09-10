const pool                  = require('../database/db')
const jwt                   = require('jsonwebtoken')
const bcrypt                = require('bcryptjs')
const authenticationHelpers = require('../utils/auth')
const { promisify }         = require('util')


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).render('Login', {
                message: 'Porfavor ingresar correo y contraseña.'
            })
        }

        await pool.query('SELECT * FROM schools WHERE email = ?', [email], async (error, results) => {

            if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
                res.status(401).render('login', {
                    message: 'Usuario y/o contraseña incorrecta'
                })
            } else {
                const id = results[0].id

                const token = authenticationHelpers.generateToken(id)

                const cookieOptions = authenticationHelpers.cookieConfig()

                res.cookie('jwt', token, cookieOptions)
                res.status(200).redirect('/')
            }

        })

    } catch (error) {
        return res.status(500).render('index', {
            message: 'En este momento el servicio no esta disponible, favor intentarlo más tarde.'
        })
    }
}

exports.register = async (req, res) => {

    const { name, email, password, passwordConfirm } = req.body;

    if (!name || !email || !password || !passwordConfirm) {
        return res.status(400).render('Register', {
            message: 'Porfavor llenar todos los campos.'
        })
    }

    await pool.query('SELECT email FROM schools WHERE email = ?', [email], async (error, results) => {
        if (error) {
            return res.status(500).render('Register', {
                message: 'Un error ha ocurrido, favor contactar administrador.'
            })
        }
        if (results.length > 0) {
            return res.render('Register', {
                message: 'Este correo ya esta en uso.'
            })
        } else if (password !== passwordConfirm) {
            return res.render('Register', {
                message: 'Las contraseñas no coinciden'
            })
        }

        let hashedPassword = authenticationHelpers.hashedPassword(password)

        hashedPassword
            .then((hashedPassword) => {
                pool.query('INSERT INTO schools SET ?', { name: name, email: email, password: hashedPassword }, (error, results) => {
                    if (error) {
                        return res.status(500).render('Register', {
                            message: 'Un error ha ocurrido, favor contactar administrador.'
                        })
                    } else {
                        return res.render('Register', {
                            message: 'Usuario registrado exitosamente'
                        })
                    }
                })
            })
    })
}

exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1) Verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

            // 2) Check if the user still exists
            await pool.query('SELECT * FROM schools WHERE id = ?', [decoded.id], (error, result) => {

                if (!result) {
                    return next()
                }

                req.user = result[0];
                return next()
            })
        } catch (error) {
            return next()
        }
    } else {
        next()
    }
}

exports.logout = async (req, res) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).redirect('/login')
}

