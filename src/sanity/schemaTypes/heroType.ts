import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'welcomeTag',
      type: 'string',
      title: 'Welcome Tag',
    }),
    defineField({
      name: 'titleLine1',
      type: 'string',
      title: 'Title Line 1',
    }),
    defineField({
      name: 'titleLine2',
      type: 'string',
      title: 'Title Line 2',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'primaryButtonText',
      type: 'string',
      title: 'Primary Button Text',
    }),
    defineField({
      name: 'primaryButtonLink',
      type: 'string',
      title: 'Primary Button Link',
    }),
    defineField({
      name: 'secondaryButtonText',
      type: 'string',
      title: 'Secondary Button Text',
    }),
    defineField({
      name: 'secondaryButtonLink',
      type: 'string',
      title: 'Secondary Button Link',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Hero Image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
