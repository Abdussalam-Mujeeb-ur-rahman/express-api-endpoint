const { addPerson, readPersonById, updatePersonById, deletePersonById, removePersonByName, readAllPersons, readPersonByName } = require('../controllers/personController');

const router = require('express').Router();


router.route('/')
   .post(addPerson)
   .delete(removePersonByName)

router.route('/all')
   .get(readAllPersons) 

router.route('/:id')
   .get(readPersonById)
   .put(updatePersonById)
   .delete(deletePersonById)   
   

module.exports = router;