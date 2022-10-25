export interface IAddress {
	email: string
	name: string
}

export interface IMessage {
	to: Object
	from: Object
	subject: string
	body: string
}

export interface IMailProvider {
	sendMail(message: IMessage): Promise<void>
}
