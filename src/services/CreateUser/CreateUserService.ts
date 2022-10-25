import { User } from '../../entities/UserEntity'
import { IMailProvider } from '../../providers/MailProvider'
import { IUsersRepository } from '../../repositories/UserRepository'
import { ICreateUserRequestDto } from './CreateUserDto'

export class CreateUserService {
	constructor(
		private usersRepository: IUsersRepository,
		private mailProvider: IMailProvider
	) {}

	async execute(data: ICreateUserRequestDto) {
		const userAlreadyExists = await this.usersRepository.findByEmail(
			data.email
		)

		if (userAlreadyExists) throw new Error('User already exists')

		const user = new User(data)

		await this.usersRepository.saveUser(user)

		this.mailProvider.sendMail({
			to: {
				name: data.name,
				email: data.email,
			},
			from: {
				name: 'Clube dos calvados',
				email: 'equipe@meuapp.com',
			},
			subject: 'Clube dos calvões te deseja boas vindas',
			body: '<p>Seja bem vindo ao clube dos calvões. Você já pode se autenticar</p>',
		})
	}
}
