import {defineArrayMember, defineField, defineType} from 'sanity'

export const teamType = defineType({
  name: 'team',
  title: 'Galería de Equipo (Sección Team)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título de la Sección',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descripción de la Sección',
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Imágenes del Equipo',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo (alt)',
            }),
          ],
        }),
      ],
    }),
  ],
})
