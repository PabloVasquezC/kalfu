import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Kalfú Content')
    .items([
      S.listItem()
        .title('Hero Section')
        .id('singleton-hero')
        .child(
          S.document()
            .schemaType('hero')
            .documentId('singleton-hero')
        ),
      S.listItem()
        .title('About Section')
        .id('singleton-about')
        .child(
          S.document()
            .schemaType('about')
            .documentId('singleton-about')
        ),
      S.documentTypeListItem('service').title('Services'),
      S.listItem()
        .title('Team Gallery')
        .id('singleton-team')
        .child(
          S.document()
            .schemaType('team')
            .documentId('singleton-team')
        ),
      S.listItem()
        .title('Contact Info')
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
