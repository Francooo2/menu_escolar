const notEmpty = (req, res, next) => {

    if (Object.keys(req.body).length !== 0) {
        const bodyData = Object.keys(req.body).map(key => req.body[key])

        const stateBody = bodyData.some((data) => data.length === 0)

        if (stateBody) {
            return res.status(400).render('Orders', {
                message: 'Favor enviar todos los campos'
            })
        } else {
            return next()
        }
    } else {
        return res.status(400).render('Orders', {
            message: 'Favor enviar todos los campos'
        })
    }
}

module.exports = {
    notEmpty
}