import { SyliusCategorie } from './site'

export interface SyliusProduct {
  id: number
  name: string
  shortDescription: string
  description: string
  slug: string
  images: SyliusProductImage[]
  variants: SyliusProductVariant[]
  options: SyliusProductOption[]
  productTaxons: SyliusProductTaxon[]
}

export interface SyliusProductImage {
  id: number
  type: string
  path: string
}

export interface SyliusProductVariant {
  id: number
  code: string
  optionValues: SyliusProductOptionValues[]
  name: string
  price: number
  originalPrice: number
  inStock: boolean
}

export interface SyliusProductOption {
  id: number
  code: string
  option: string
  values: SyliusProductOptionValues[]
  createdAt: Date
  updatedAt: Date
  name: string
}

export interface SyliusProductOptionValues {
  id: number
  code: string
  value: string
}

export interface SyliusProductTaxon {
  id: number
  taxon: SyliusCategorie
}