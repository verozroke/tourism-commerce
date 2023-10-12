import type {
  AgeGroupOption,
  DurationOption,
  TagOption,
  SpecialOption,
} from './tour'

export type AgeGroup = {
  id: string
  name: AgeGroupOption
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type Duration = {
  id: string
  name: DurationOption
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type Tag = {
  id: string
  name: TagOption
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}

export type Special = {
  id: string
  name: SpecialOption
  tourInfoId: string
  createdAt: Date
  updatedAt: Date
}