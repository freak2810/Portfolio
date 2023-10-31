import { defineType } from 'sanity';

export default defineType({
	title: 'Link',
	type: 'object',
	preview: {
		select: {
			title: 'socialProfile',
		},
	},
	name: 'link',
	fields: [
		{
			name: 'username',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'profileLink',
			type: 'url',
			validation: Rule => Rule.required(),
		},
		{
			name: 'socialProfile',
			type: 'string',
			validation: Rule => Rule.required(),
		},
	],
});
