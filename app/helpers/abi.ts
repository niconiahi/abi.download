import { Abi, Jsons } from "~/types"
import { jsonToAbi } from "~/helpers"

export function getAbis(jsons: Jsons): Abi[] {
  return Object.entries(jsons).map(jsonToAbi)
}
