const pool = require('../database/db')

const createOrder = async (req, res) => {
    const sql1 = 'INSERT INTO orders SET ?'
    const sql2 = 'SELECT * FROM orders'
    const { vegetarian, caloric, celiac, ethnic, standard, date } = req.body

    const newOrder = {
        date: date,
        is_rectified: true,
        observations: '',
        school_id: req.user.id,
        vegetarian: vegetarian,
        vegetarian_real: vegetarian,
        celiac: celiac,
        celiac_real: celiac,
        standard: standard,
        standard_real: standard,
        caloric: caloric,
        caloric_real: caloric,
        ethnic: ethnic,
        ethnic_real: ethnic
    }
    await pool.query(sql1, [newOrder], (error, result) => {
        if (error) {
            return res.status(500).render('Home', {
                message: 'En este momento el servicio no esta disponible, favor intentarlo más tarde.'
            })
        } else {
            pool.query(sql2, (error, resultAll) => {
                if (error) {
                    return res.status(500).render('Home', {
                        message: 'En este momento el servicio no esta disponible, favor intentarlo más tarde.'
                    })

                } else {
                    pool.query('SELECT name FROM schools WHERE id = ?', [req.user.id], (error, result) => {
                        if (error) {
                            return res.status(500).render('Home', {
                                message: 'En este momento el servicio no esta disponible, favor intentarlo más tarde.'
                            })
                        } else {
                            for (const iterator of resultAll) {
                                iterator['school'] = result[0].name
                                let date = new Date(iterator['date'])
                                iterator['date'] = `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`
                            }
                            return res.status(200).render('Home', {
                                user: req.user,
                                mesage: 'Orden registrada exitosamente',
                                data: resultAll,
                            })

                        }

                    })

                }
            })
        }
    })
}


const getOrders = async (req, res, next) => {
    const sql = 'SELECT * FROM orders'
    await pool.query(sql, (error, resultsAll) => {
        if (error) {
            return res.status(500).render('Home', {
                message: 'En este momento el servicio no esta disponible, favor intentarlo más tarde.'
            })
        } else {
            pool.query('SELECT name FROM schools WHERE id = ?', [req.user.id], (error, result) => {
                if (error) {
                    return res.status(500).render('Home', {
                        message: 'En este momento el servicio no esta disponible, favor intentarlo más tarde.'
                    })
                } else {
                    for (const iterator of resultsAll) {
                        iterator['school'] = result[0].name
                        let date = new Date(iterator['date'])
                        iterator['date'] = `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`
                    }
                }

            })

            req.orders = resultsAll
            return next()
        }
    })
}

const getOrderById = async (req, res, next) => {
    const sql = 'SELECT * FROM orders WHERE id = ?'
    await pool.query(sql, [req.params.id], (error, resultsAll) => {
        resultsAll[0].school = req.user.name
        resultsAll[0].total = resultsAll[0].vegetarian + resultsAll[0].caloric + resultsAll[0].ethnic + resultsAll[0].standard + resultsAll[0].celiac
        let date = resultsAll[0].date
        resultsAll[0]['date'] = `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`
        req.order = resultsAll
        return next()
    })
}

const updateById = async (req, res) => {
    const id = req.params.id
    const sql1 = 'UPDATE orders SET ? WHERE id = ?'

    const { vegetarian_real, caloric_real, celiac_real, ethnic_real, standard_real, observations } = req.body

    const newOrder = {
        is_rectified: false,
        observations: observations,
        school_id: req.user.id,
        vegetarian_real: vegetarian_real,
        celiac_real: celiac_real,
        standard_real: standard_real,
        caloric_real: caloric_real,
        ethnic_real: ethnic_real
    }
    await pool.query(sql1, [newOrder, id], (error, result) => {
        if (error) {
            return res.status(500).render('Home', {
                message: 'En este momento el servicio no esta disponible, favor intentarlo más tarde.'
            })
        } else {
            return res.status(200).redirect('/')
        }
    })
}

module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    updateById
}