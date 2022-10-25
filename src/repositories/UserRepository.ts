import { User } from '../entities/UserEntity'

export interface IUsersRepository {
	findByEmail(email: string): Promise<User | undefined>

	findById(id: string): Promise<User | undefined>

	saveUser(user: User): Promise<User>

	updateUser(user: User): Promise<User>

	deleteUser(id: string): Promise<void>

	listUsers(): Promise<User[]>
}
