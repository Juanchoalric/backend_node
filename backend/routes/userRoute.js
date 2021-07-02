import express from 'express';
import { Mongoose } from 'mongoose';
import User from '../models/userModel';
import { getToken, isAuth } from '../utils';

const router = express.Router();

router.post('/signin', async (req, res) => {

    try {
        const signinUser = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
    
        if (signinUser) {
            res.send({
                _id: signinUser.id,
                name: signinUser.name,
                email: signinUser.email,
                location: signinUser.location,
                address: signinUser.address,
                addressNumber: signinUser.addressNumber,
                isAdmin: signinUser.isAdmin,
                token: getToken(signinUser)
            })
        } else {
            res.status(401).send({msg: "Email o Password incorrecta!"});
        }
    } catch (error) {
        res.send({msg: error.message +" NO FUNCIONA" });
    }
    

});

router.post('/register', async (req, res) => {

    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location,
            address: req.body.address,
            addressNumber: req.body.addressNumber,
        });

        const newUser = await user.save()

        if(newUser){
            res.send({
                _id: signinUser.id,
                name: signinUser.name,
                email: signinUser.email,
                isAdmin: signinUser.isAdmin,
                location: req.body.location,
                address: req.body.address,
                addressNumber: req.body.addressNumber,
                token: getToken(newUser)
            })
        } else {
            res.status(401).send({msg: "Datos del usuario incorrectos"});
        }
    } catch (error) {
        res.send({msg: error.message +" NO FUNCIONA" });
    }
    

});

router.put("/:id", isAuth, async(req, res) => {
    const userId = req.params.id;
    const user = await User.findById({name: userId});
    if (user){
        user.category= req.body.email;
        user.image= req.body.password;
        user.location= req.body.location;
        user.address= req.body.address;
        user.addressNumber= req.body.addressNumber;

        const updateUser = await user.save();
        if (updateUser){
            return res.status(200).send({message: 'Se modifico el usuario', data: updateUser});
        }
    }
    return res.status(500).send({message: 'Error al modificar el usuario'});
});

router.get("/createadmin", async (req, res)=>{

    try {
        const user = new User({
            name:"juan cruz alric",
            email: 'alricjuancruz@gmail.com',
            password: '1234',
            location: "CABA",
            address: "Av. Siempre Viva",
            addressNumber: 1234,
            isAdmin: true,
        });
    
        const newUser = await user.save();
        res.send(newUser);
        
    } catch (error) {
        res.send({msg: error.message +" NO FUNCIONA" });
    }
    
});

export default router;