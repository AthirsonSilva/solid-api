import { Router } from 'express'
import { createUserController } from './services/CreateUser'

const router = Router()

router.post('/users', (request: Request, response: Response): Promise<any> => {
	return createUserController.handle(request, response)
})
