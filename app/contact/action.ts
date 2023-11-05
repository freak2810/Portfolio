'use server';

// import {
// 	SESClient,
// 	SendEmailCommand,
// 	SendEmailCommandInput,
// } from '@aws-sdk/client-ses';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// const ses = new SESClient({
// 	region: 'us-east-1',
// 	credentials: {
// 		accessKeyId: process.env.AWS_SES_ACCESS_KEY || '',
// 		secretAccessKey: process.env.AWS_SES_SECRET_KEY || '',
// 	},
// });

const EMAIL = 'adityamanikanthrao@gmail.com';

export const sendEmail = async (formData: FormData) => {
	try {
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		if (!name || !email || !message)
			return {
				success: false,
				message: 'Please fill all the fields',
			};

		const response = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: EMAIL,
			subject: `Portfolio: Message from ${name} - ${email}`,
			text: `message: ${message}\n\nfrom: ${name}\nemail: ${email}`,
		});

		if (response.error) {
			console.error('Error in sending email', response.error);

			return {
				success: false,
				message: 'Something went wrong',
			};
		}

		console.log('Email sent successfully');

		return {
			success: true,
			message: 'Email sent successfully',
		};
	} catch (error) {
		console.error('Error in sending email', error);

		return {
			success: false,
			message: 'Something went wrong',
		};
	}
};
