import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'landingPage',
	title: 'Landing Page',
	type: 'document',

	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'roles',
			title: 'Roles',
			type: 'array',
			validation: Rule => Rule.required(),
			of: [
				{
					title: 'Role',
					type: 'string',
					validation: Rule => Rule.unique() && Rule.required(),
				},
			],
		}),
		defineField({
			name: 'socialLinks',
			title: 'Social Links',
			type: 'array',
			validation: Rule => Rule.required(),
			of: [
				{
					type: 'link',
					title: 'Social Link',
					name: 'link',
				},
			],
		}),
		defineField({
			name: 'profilePicture',
			title: 'Profile picture',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: Rule => Rule.required(),
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
					validation: Rule => Rule.required(),
				},
			],
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'array',
			validation: Rule => Rule.required(),
			of: [
				{
					title: 'Block',
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: [],
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
});
