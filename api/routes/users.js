import express from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/user.js';
import { verfityToken, verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verfityToken, (req, res, next) => {
//   res.send('hello user, you are loggen in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('hello user, you are loggen in and you can delete your account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello admin, you are loggen in and you can delete all accounts');
// });
//update
router.put('/:id', verifyUser, updateUser);
//delete
router.delete('/:id', verifyUser, deleteUser);
//get
router.get('/:id', verifyUser, getUser);
//getall
router.get('/', verifyAdmin, getUsers);

export default router;
