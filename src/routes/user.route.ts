import {Router} from "express";
const userRoute = Router();
import {getUser,createUser} from '../controllers/user.controller';
userRoute.get('/user',getUser);
//userRoute.get('user/:id');
userRoute.post('/user',createUser);


export default userRoute
