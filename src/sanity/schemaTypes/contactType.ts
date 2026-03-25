import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Información de Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descripción',
    }),
    defineField({
      name: 'whatsappNumber',
      type: 'string',
      title: 'Número de WhatsApp (Ej: 56912345678)',
    }),
    defineField({
      name: 'instagramUrl',
      type: 'string',
      title: 'Enlace de Instagram',
    }),
    defineField({
      name: 'facebookUrl',
      type: 'string',
      title: 'Enlace de Facebook',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Dirección (Curicó, etc.)',
    }),
  ],
})
