import express from 'express'
import { deleteUser, getUsers, getUsersById, postUser, updateUser } from '../controllers/c_users.js';
import { deleteExpense, editExpense, getExpense, postExpense } from '../controllers/c_expense.js';
import { deleteMobil, getMobil, patchMobil, postMobil, putMobil } from '../controllers/c_mobil.js';

const router = express.Router()

router.get('/mobil', getMobil)
router.post('/mobil', postMobil)
router.put('/mobil', putMobil)
router.patch('/mobil', patchMobil)
router.delete('/mobil', deleteMobil)

//Users

router.get('/users', getUsers)
router.get('/users/:id', getUsersById)
router.post('/users', postUser)
router.patch('/users', updateUser)
router.delete('/users/:id', deleteUser)

//Expense

router.get('/expense', getExpense)
router.post('/expense', postExpense)
router.patch('/expense', editExpense)
router.delete('/expense/:id', deleteExpense)

export default router;