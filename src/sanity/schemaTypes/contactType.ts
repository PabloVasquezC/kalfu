import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact Information',
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
      name: 'whatsappNumber',
      type: 'string',
      title: 'WhatsApp Number (e.g. +56912345678)',
    }),
    defineField({
      name: 'instagramUrl',
      type: 'string',
      title: 'Instagram URL',
    }),
    defineField({
      name: 'facebookUrl',
      type: 'string',
      title: 'Facebook URL',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
    }),
  ],
})
