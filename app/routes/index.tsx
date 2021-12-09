import { LoaderFunction } from "@remix-run/server-runtime"
import React, { ReactElement } from "react"
import { useLoaderData, Link } from "remix"

import { idToSlug, getAbis, getJsons } from "~/helpers"
import { Abi } from "~/types"

export const loader: LoaderFunction = () => {
  const jsons = getJsons()
  const abis = getAbis(jsons)

  return abis
}

export default function Index(): ReactElement {
  const abis = useLoaderData<Abi[]>()

  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen">
      <h1 className="mb-4 text-white text-5xl">Abi download</h1>
      {abis.map(({ id, type }) => {
        const slug = idToSlug(id)
        const lowerType = type.toLowerCase()

        const to = `/${lowerType}/${slug}`
        const key = `abi-${id}-${type}`

        return (
          <div
            key={key}
            className="flex justify-between items-center w-80 mt-2"
          >
            <h3 className="text-white">{id}</h3>
            <Link
              reloadDocument
              className="text-white bg-gray-400 hover:bg-gray-600 p-2 transition-all 0.1s"
              to={to}
            >
              Get ABI
            </Link>
          </div>
        )
      })}
    </div>
  )
}
