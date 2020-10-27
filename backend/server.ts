
// @ts-ignore
import dotenv from 'dotenv';

dotenv.config();

require('./core/db')
// @ts-ignore
import express from 'express';
// @ts-ignore
import validator from 'express-validator';
import { UserCtrl } from './controllers/UserController';
import {registerValidations} from "./validations/register";



const app = express();

app.use(express.json());

/*TODO:
1. When receiving information about a user, you need to hide the fields: confirmHash and password.;
2. Make Authorization via JWT + Passport
3. Make it possible to add tweets through an authorized user
*  */

app.get('/users', UserCtrl.index);
app.post('/users', registerValidations ,UserCtrl.create);
app.get('/users/verify', registerValidations ,UserCtrl.verify);
// app.patch('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);

app.listen(process.env.PORT, () => {
    console.log('SERVER IS RUNNING!')
})
