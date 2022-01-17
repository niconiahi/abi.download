import invariant from "tiny-invariant"

import { Method, Abi, Type } from "~/types"

export function jsonToAbi([id, methods]: [string, Method[]]): Abi {
  const isToken = id.toLowerCase().includes("token")

  function getType(): Type {
    if (isToken) return Type.Token

    return Type.Governor
  }

  const type = getType()

  return {
    id,
    type,
    methods,
  }
}

export function idToKebab(id: string): string {
  const camelParts = id.match(/[A-Z][a-z]+|[0-9]+/g)

  invariant(camelParts, "The provided ABI id must be camel case")

  const kebab = camelParts.map((part) => part.toLowerCase()).join("-")

  return kebab
}

export function idToSlug(id: string): string {
  const camelParts = id.match(/[A-Z][a-z]+|[0-9]+/g)

  invariant(camelParts, "The provided ABI id must be camel case")

  const kebab = camelParts
    .slice(1)
    .map((part) => part.toLowerCase())
    .join("-")

  return kebab
}
