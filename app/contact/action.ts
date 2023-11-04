'use server';

import { MailtrapClient } from 'mailtrap';

const TOKEN = '7f8a481c526e3fbd6bf88c5cd4f1e039';
const ENDPOINT = 'https://send.api.mailtrap.io/';

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

export const sendEmail = async (formData: FormData) => {
	const name = formData.get('name');
	const email = formData.get('email');
	const message = formData.get('message');

	console.log(name, email, message);

	// const sender = {
	// 	email: 'mailtrap@aditya2810.me',
	// 	name: 'Mailtrap Test',
	// };
	// const recipients = [
	// 	{
	// 		email: 'adityamanikanthrao@gmail.com',
	// 	},
	// ];
	// client
	// 	.send({
	// 		from: sender,
	// 		to: recipients,
	// 		subject: 'You are awesome!',
	// 		text: 'Congrats for sending test email with Mailtrap!',
	// 		category: 'Integration Test',
	// 	})
	// 	.then(console.log, console.error);
};
