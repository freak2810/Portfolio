import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'educationPage',
	title: 'Education Page',
	type: 'document',
	fields: [
		defineField({
			name: 'course',
			title: 'Course',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'institute',
			title: 'Institute',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'affiliation',
			title: 'Affiliation',
			type: 'string',
		}),
		defineField({
			name: 'period',
			title: 'Time Period',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'scores',
			title: 'Scores',
			type: 'string',
		}),
		defineField({
			name: 'location',
			title: 'Location',
			type: 'string',
		}),
		defineField({
			name: 'achievements',
			title: 'Achievements',
			type: 'array',
			of: [{ type: 'string', validation: Rule => Rule.required() }],
		}),
	],
	preview: {
		select: {
			title: 'course',
		},
	},
});
