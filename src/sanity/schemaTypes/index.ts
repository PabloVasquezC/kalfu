import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {heroType} from './heroType'
import {aboutType} from './aboutType'
import {serviceType} from './serviceType'
import {teamType} from './teamType'
import {contactType} from './contactType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    heroType,
    aboutType,
    serviceType,
    teamType,
    contactType
  ],
}
