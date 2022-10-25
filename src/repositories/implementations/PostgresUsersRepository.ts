import { User } from './../../entities/UserEntity'
import { IUsersRepository } from './../UserRepository'

export class PostgresUserRespository implements IUsersRepository {
	private users: User[] = Array<User>()

	async findByEmail(email: string): Promise<User> {
		const user = this.users.find((user) => user.email === email)

		return user
	}

	async saveUser(user: User): Promise<User> {
		this.users.push(user)

		return user
	}

	async findById(id: string): Promise<User> {
		const user = this.users.find((user) => user.id === id)

		return user
	}

	async listUsers(): Promise<User[]> {
		return this.users
	}

	async deleteUser(id: string): Promise<void> {
		const userIndex = this.users.findIndex((user) => user.id === id)

		this.users.splice(userIndex, 1)
	}

	async updateUser(id: string, data: Partial<User>): Promise<User> {
		const user = this.users.find((user) => user.id === id)

		Object.assign(user, data)

		return user
	}
}
