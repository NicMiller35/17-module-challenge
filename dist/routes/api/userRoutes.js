import { Router } from 'express';
const router = Router();
import { getUsers, getSingleUser, createUser, deleteUser, updateUser, addFriend, deleteFriend } from '../../controllers/userControllers.js';
router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser).delete(deleteUser);
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);
export default router;
