import { Jsons, Method, Abi } from "~/types"

import * as tokens from "../abis/token"
import * as governors from "../abis/governor"

export function jsonToAbi([id, methods]: [string, Method[]]): {
  id: string
  methods: Method[]
} {
  return {
    id,
    methods,
  }
}

export function getAbis(jsons: Jsons): Abi[] {
  return Object.entries(jsons).map(jsonToAbi)
}

export function getJsons(): Jsons {
  return { ...governors, ...tokens }
}
