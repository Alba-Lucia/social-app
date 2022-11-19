import {Router} from 'express'
import { allPosts, createPosts, deletePosts, getPosts, likePosts, timelinePosts, updatePosts } from '../controllers/posts.controllers.js'

const router = Router()

router.post('/', createPosts)

router.put('/:id', updatePosts)

router.delete('/:id', deletePosts)

router.put('/:id/like', likePosts)

router.get('/:id', getPosts)
 
router.get('/timeline/:userId', timelinePosts)

router.get('/profile/:username', allPosts)


export default router