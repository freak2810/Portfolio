import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'experiencePage',
	title: 'Experience Page',
	type: 'document',
	fields: [
		defineField({
			name: 'id',
			title: 'ID',
			type: 'number',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'role',
			title: 'Role',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'company',
			title: 'Company',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'type',
			title: 'Type',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'period',
			title: 'Time Period',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'responsibilities',
			title: 'Responsibilities',
			type: 'array',
			of: [{ type: 'block' }],
			validation: Rule => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'company',
		},
	},
});
