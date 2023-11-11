import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'technologyPage',
	title: 'Technology Page',
	type: 'document',
	fields: [
		defineField({
			name: 'id',
			title: 'ID',
			type: 'number',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'type',
			title: 'Type',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'technologies',
			title: 'Technologies',
			type: 'array',
			validation: Rule => Rule.required(),
			of: [
				{
					title: 'Technology',
					type: 'string',
					validation: Rule => Rule.unique() && Rule.required(),
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'type',
		},
	},
});
