import { jsonToAbi } from "~/helpers"
import { Abi, Jsons } from "~/types"

export function getAbis(jsons: Jsons): Abi[] {
  return Object.entries(jsons).map(jsonToAbi)
}
