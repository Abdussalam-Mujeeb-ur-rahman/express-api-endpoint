const {
  createPerson,
  getPersonById,
  getPersonByName,
  getAllPersons,
  updatePerson,
  deletePerson,
  deletePersonByName,
} = require("../utils/person");

const addPerson = async (req, res) => {
  try {
    if (!req.body.name || req.body.name.length < 5) {
      return res.status(400).json({
        message: "Name is required and should contain 5 or more characters!",
      });
    }

    // Check if the user already exists
    const userExists = await getPersonByName(req.body.name);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new person
    const newPerson = await createPerson(req.body.name);

    // Send a successful response
    res.status(201).json({ newPerson });
    
    console.log(`New person created: ${newPerson.name}`);
  } catch (error) {
    console.error("Error in addPerson:", error);
    res.status(500).json({ message: "An internal server error occurred." });
  }
};


const readPersonById = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "ID is required" });
    }
    
    const person = await getPersonById(req.params.id);

    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.status(200).json({ person });
  } catch (error) {
    console.error("Error in readPersonById:", error);
    res.status(500).json({ message: "An internal server error occurred." });
  }
};


const readPersonByName = async (req, res) => {
  try {
    if (!req.query.fname) {
      return res.status(400).json({ message: "Name is required" });
    }

    const person = await getPersonByName(req.query.fname);

    if (!person) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json({ person });
  } catch (error) {
    console.error("Error in readPersonByName:", error);
    res.status(500).json({ message: "An internal server error occurred." });
  }
};


const readAllPersons = async (req, res) => {
  const persons = await getAllPersons();
  res.status(200).json({ persons });
};

const updatePersonById = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const person = await updatePerson(req.params.id, req.body.name);

    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.status(200).json({ person });
  } catch (error) {
    console.error("Error in updatePersonById:", error);
    res.status(500).json({ message: "An internal server error occurred." });
  }
};


const deletePersonById = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const deletedPerson = await deletePerson(req.params.id);

    if (deletedPerson) {
      return res.status(204).send("User deleted successfully!");
    } else {
      return res.status(404).send("Person not found");
    }
  } catch (error) {
    console.error("Error in deletePersonById:", error);
    return res.status(500).send("An internal server error occurred.");
  }
};


const removePersonByName = async (req, res) => {
  try {
    if (!req.query.name) {
      return res
        .status(400)
        .json({ message: "Name is required! Please pass it as a query parameter." });
    }
    
    const deleted = await deletePersonByName(req.query.name);
    

      res.status(deleted.status).json({ message: deleted.message });
    
    console.log(deleted);
  } catch (error) {
    console.error("Error in removePersonByName:", error);
    res.status(500).json({ message: "An internal server error occurred." });
  }
};


module.exports = {
  addPerson,
  readPersonById,
  readPersonByName,
  readAllPersons,
  updatePersonById,
  deletePersonById,
  removePersonByName,
};
