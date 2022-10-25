import { MailTrap } from '../../providers/implementations/MailTrap'
import { PostgresUserRespository } from '../../repositories/implementations/PostgresUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserService } from './CreateUserService'

const mailTrapProvider = new MailTrap()
const postgresUsersRepository = new PostgresUserRespository()

const createUserService = new CreateUserService(
	postgresUsersRepository,
	mailTrapProvider
)

const createUserController = new CreateUserController(createUserService)

export { createUserService, createUserController }
