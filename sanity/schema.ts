import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import contactForm from './schemas/contactForm'
import pressRelease from './schemas/pressRelease'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, contactForm, pressRelease],
}
