import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Servicio / Terapia',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Nombre del Servicio',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descripción',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icono (Nombre Lucide como Leaf o Heart)',
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color del Icono (Ej: text-blue-600)',
    }),
  ],
})
