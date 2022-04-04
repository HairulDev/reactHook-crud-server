import People from "../models/peopleModel.js";

export const createPeople = async (req, res) => {
    try {
       await People.create(req.body);
       res.json({
           "message": "People Created"
       });
    } catch (error) {
        res.json( { message: error.message });
    }
}

export const getAllPeoples = async (req, res) => {
    try {
        const peoples = await People.findAll();
        res.json(peoples);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPeopletById = async (req, res) => {
    try {
        const peoples = await People.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(peoples[0]);
    } catch (error) {
        res.json( { message: error.message});
    }
}

export const updatePeople = async (req, res) => {
    try {
       await People.update(req.body ,  {
           where: {
               id: req.params.id
           }
       });
       res.json({
           "message": "People Updated"
       });
    } catch (error) {
        res.json( { message: error.message });
    }
}

export const deletePeople = async (req, res) => {
    try {
       await People.destroy({
           where: {
               id: req.params.id
           }
       });
       res.json({
           "message": "People Deleted"
       });
    } catch (error) {
        res.json( { message: error.message });
    }
}