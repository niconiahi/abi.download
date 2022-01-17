import { Jsons } from "~/types"
import { tokens, governors } from "~/constants"

export function getJsons(): Jsons {
  const tokenJsons = getTokenJsons()
  const governorJsons = getGovernorJsons()

  return { ...tokenJsons, ...governorJsons }
}

export function getTokenJsons(): Jsons {
  return { ...tokens }
}

export function getGovernorJsons(): Jsons {
  return { ...governors }
}
