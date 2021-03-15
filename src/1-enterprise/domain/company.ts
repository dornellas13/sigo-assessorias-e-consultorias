import { Entity } from '#enterprise/domain/entity'

export class Company extends Entity {
  name!: string
  cnpj!: number
  email!: string
  startHire!: string
  endHire!: string
  complianceAssessed?: boolean
  createdAt?: string
  updatedAt?: string

  constructor (obj: Partial<Company>) {
    super()
    Object.assign(this,obj)
  }
}
