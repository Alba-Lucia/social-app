import {Router} from 'express'
import { deleteUser, followUser, getUser, unFollowUser, updateUser } from '../controllers/user.controllers.js'

const router = Router()

// Get all post
// router.get('/register', getUsers )


// // Update user
router.put('/:id', updateUser)

// // Delete a user
router.delete('/:id', deleteUser)

// Get one user
router.get('/:id', getUser)

// Follow a user
router.put('/:id/follow', followUser)

// Unfollow a user
router.put('/:id/unfollow', unFollowUser)

export default router