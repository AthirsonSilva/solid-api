import { IMailProvider, IMessage } from '../MailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailTrap implements IMailProvider {
	private transporter: Mail

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: 'smtp.mailtrap.io',
			port: 2525,
			auth: {
				user: '59790f224c3246',
				pass: 'a278e828581e19',
			},
		})
	}

	async sendMail(message: IMessage): Promise<void> {
		await this.transporter.sendMail({
			to: {
				name: message.to.name,
				address: message.to.email,
			},
			from: {
				name: message.from.name,
				address: message.from.email,
			},
			subject: message.subject,
			html: message.body,
		})
	}
}
