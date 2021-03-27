import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.get("/createadmin", async (req, res)=>{

    try {
        const user = new User({
            name:"juan cruz alric",
            email: 'alricjuancruz@gmail.com',
            password: '1234',
            isAdmin: true,
        });
    
        const newUser = await user.save();
        res.send(newUser);
        
    } catch (error) {
        res.send({msg: error.message +" NO FUNCIONA" });
    }
    
});

export default router;