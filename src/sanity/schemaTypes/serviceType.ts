import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon (Lucide name)',
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color Class (e.g. text-blue-600)',
    }),
  ],
})
