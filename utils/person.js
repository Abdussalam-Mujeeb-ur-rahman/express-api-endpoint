const Person = require("../Models/userModel");

const createPerson = async (name) => {
  try {
    const person = await Person.create({ name });
    return person;
  } catch (error) {
    console.error("Error in createPerson:", error);
    throw error;
  }
};

const getAllPersons = async () => {
  try {
    const persons = await Person.find({});
    console.log('here!')
    
    return persons;
  } catch (error) {
    console.error("Error in getAllPersons:", error);
    throw error;
  }
};


const getPersonById = async (id) => {
  try {
    const person = await Person.findById(id);
    if (!person) {
      return null;
    }
    return person; 
  } catch (error) {
    console.error("Error in getPersonById:", error);
    throw error;
  }
};


const getPersonByName = async (name) => {
  try {
    const person = await Person.findOne({ name: name });
    return person; 
  } catch (error) {
    console.error("Error in getPersonByName:", error);
    throw error;
  }
};


const updatePerson = async (id, name) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      id,
      { name: name },
      { new: true }
    );
    return updatedPerson;
  } catch (error) {
    console.error("Error in updatePerson:", error);
    throw error;
  }
};


const deletePerson = async (id) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(id);
    
    if (deletedPerson) {
      return true; 
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error in deletePerson:", error);
    throw error; 
  }
};


const deletePersonByName = async (name) => {
    try {
        const existingPerson = await Person.findOne({ name });

        if (!existingPerson) {
            return { status: 404, message: `User with name '${name}' not found in the database!` };
        }

        console.log(`Deleting user with ID: ${existingPerson._id}`);
        
        const deletedPerson = await Person.findByIdAndDelete(existingPerson._id);

        if (!deletedPerson) {
            return { status: 500, message: `Failed to delete user '${name}' from the database!` };
        }

        return { status: 204, message: `User '${name}' successfully deleted!` };
    } catch (error) {
        console.error(`Error deleting user '${name}':`, error);
        return { status: 500, message: `An error occurred while deleting the user '${name}'!` };
    }
};


module.exports = {
  createPerson,
  getAllPersons,
  getPersonById,
  getPersonByName,
  updatePerson,
  deletePerson,
  deletePersonByName,
};
