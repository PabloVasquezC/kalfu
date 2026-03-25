import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Sección Principal (Hero)',
  type: 'document',
  fields: [
    defineField({
      name: 'welcomeTag',
      type: 'string',
      title: 'Etiqueta de Bienvenida',
    }),
    defineField({
      name: 'titleLine1',
      type: 'string',
      title: 'Título Línea 1',
    }),
    defineField({
      name: 'titleLine2',
      type: 'string',
      title: 'Título Línea 2',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descripción',
    }),
    defineField({
      name: 'primaryButtonText',
      type: 'string',
      title: 'Texto Botón Primario',
    }),
    defineField({
      name: 'primaryButtonLink',
      type: 'string',
      title: 'Enlace Botón Primario',
    }),
    defineField({
      name: 'secondaryButtonText',
      type: 'string',
      title: 'Texto Botón Secundario',
    }),
    defineField({
      name: 'secondaryButtonLink',
      type: 'string',
      title: 'Enlace Botón Secundario',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagen Principal',
      options: {
        hotspot: true,
      },
    }),
  ],
})
