import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'projectsPage',
	title: 'Projects Page',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'githubLink',
			title: 'Github Link',
			type: 'url',
		}),
		defineField({
			name: 'deploymentLink',
			title: 'Deployment Link',
			type: 'url',
		}),
		defineField({
			name: 'stack',
			title: 'Stack',
			type: 'array',
			of: [{ type: 'string', validation: Rule => Rule.required() }],
			validation: Rule => Rule.required(),
		}),

		defineField({
			name: 'description',
			title: 'Description',
			type: 'blockContent',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'cover',
			title: 'Cover',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
	preview: {
		select: {
			title: 'name',
		},
	},
});
