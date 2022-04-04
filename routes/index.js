import express from "express";
const router = express.Router();

import { 
    getAllPeoples,
    createPeople,
    getPeopletById,
    updatePeople,
    deletePeople
 } from "../controllers/People.js";

router.get('/', getAllPeoples);
router.post('/', createPeople);
router.get('/:id', getPeopletById);
router.put('/:id', updatePeople);
router.delete('/:id', deletePeople);

export default router; 