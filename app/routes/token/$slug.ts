import { LoaderFunction } from "remix"
import invariant from "tiny-invariant"

import { idToSlug, getAbis, getTokenJsons } from "~/helpers"

export const loader: LoaderFunction = ({ params }) => {
  const { slug: paramSlug } = params

  const jsons = getTokenJsons()
  const abis = getAbis(jsons)

  const abi = abis.find(({ id }) => {
    const slug = idToSlug(id)

    return slug === paramSlug
  })

  invariant(abi, "The token ABI you are looking for doesn't exist")

  return new Response(JSON.stringify(abi), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
