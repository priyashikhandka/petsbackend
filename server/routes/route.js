import express from 'express';

import {userSignup, userLogin} from '../controller/user-controller.js';
import { getPets, getPetById} from '../controller/pet-controller.js';

const router = express.Router();

router.post('/signup' , userSignup);
router.post('/login', userLogin);


router.get('/pets',getPets);
router.get('/pet/:id', getPetById)

export default router;
