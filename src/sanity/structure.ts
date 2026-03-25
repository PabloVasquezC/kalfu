import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Gestor de Contenido Kalfú')
    .items([
      S.listItem()
        .title('Sección Principal (Hero)')
        .id('singleton-hero')
        .child(
          S.document()
            .schemaType('hero')
            .documentId('singleton-hero')
        ),
      S.listItem()
        .title('Nuestra Esencia (About)')
        .id('singleton-about')
        .child(
          S.document()
            .schemaType('about')
            .documentId('singleton-about')
        ),
      S.documentTypeListItem('service').title('Nuestros Servicios (Terapias)'),
      S.listItem()
        .title('Galería de Equipo')
        .id('singleton-team')
        .child(
          S.document()
            .schemaType('team')
            .documentId('singleton-team')
        ),
      S.listItem()
        .title('Información de Contacto')
        .id('singleton-contact')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('singleton-contact')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['hero', 'about', 'service', 'team', 'contact'].includes(item.getId()!),
      ),
    ])
