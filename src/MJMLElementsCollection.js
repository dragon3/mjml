import Body from './components/Body'
import Button from './components/Button'
import Column from './components/Column'
import Divider from './components/Divider'
import Html from './components/Html'
import Image from './components/Image'
import Invoice from './components/Invoice'
import InvoiceItem from './components/Invoice/Item'
import List from './components/List'
import Raw from './components/Raw'
import Section from './components/Section'
import Social from './components/Social'
import Text from './components/Text'
import Rating from './components/Rating'

const MJMLStandardElements = {
  'body': Body,
  'button': Button,
  'column': Column,
  'divider': Divider,
  'html': Html,
  'image': Image,
  'invoice-item': InvoiceItem,
  'invoice': Invoice,
  'rating': Rating,
  'list': List,
  'raw': Raw,
  'section': Section,
  'social': Social,
  'text': Text
}

export const endingTags = ['mj-text', 'mj-html', 'mj-button', 'mj-list', 'mj-raw', 'mj-table', 'mj-invoice-item', 'mj-rating']
export const unsafeTags = ['mj-raw']

export const registerElement = (tagName, element, options = {}) => {
  MJMLStandardElements[tagName] = element

  if (options.endingTag) {
    endingTags.push(`mj-${tagName}`)
  }

  console.log('register')
  console.log(endingTags)
  console.log(MJMLStandardElements)

  if (options.unsafeTags) {
    unsafeTags.push(`mj-${tagName}`)
  }

  return true
}

export default MJMLStandardElements
