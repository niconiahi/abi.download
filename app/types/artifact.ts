import { Type } from "~/types"

export type Method = any

export type Abi = {
  id: string
  type: Type
  methods: Method[]
}

export type Jsons = {
  [id: string]: Method[]
}
