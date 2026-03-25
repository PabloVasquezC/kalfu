import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'contentLine1',
      type: 'text',
      title: 'Content Line 1',
    }),
    defineField({
      name: 'contentLine2',
      type: 'text',
      title: 'Content Line 2',
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'icon', type: 'string', title: 'Icon (Lucide name)'}),
            defineField({name: 'text', type: 'string', title: 'Text'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'About Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'quote',
      type: 'string',
      title: 'Quote',
    }),
  ],
})
