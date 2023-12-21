const express = require('express')
const router = express.Router()
let { people } = require('../data')
let {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../contollers/people.js')
// GET METHOD
router.get('/', getPeople)

// POST METHOD(INSERTION)
router.post('/', createPerson)

router.post('/postman', createPersonPostman)

// PUT METHOD - (UPDATION)
router.put('/:id', updatePerson)

// DELETE REQUEST
router.delete('/:id', deletePerson)

// METHOD 2
// router.route('/').get(getPeople).post(createPerson)
// router.route('/postman').post(createPersonPostman)
// router.route(':/id').put(updatePerson).delete(deletePerson)








module.exports = router