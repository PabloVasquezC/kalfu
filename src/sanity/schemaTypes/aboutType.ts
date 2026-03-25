import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'Sección Sobre Nosotros (Nuestra Esencia)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
    }),
    defineField({
      name: 'contentLine1',
      type: 'text',
      title: 'Contenido Línea 1',
    }),
    defineField({
      name: 'contentLine2',
      type: 'text',
      title: 'Contenido Línea 2',
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Características highlighted (iconos)',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'icon', type: 'string', title: 'Icono (Nombre Lucide)'}),
            defineField({name: 'text', type: 'string', title: 'Texto'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagen de la Sección',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'quote',
      type: 'string',
      title: 'Frase / Cita inspiradora',
    }),
  ],
})
