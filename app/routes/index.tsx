import { LoaderFunction } from "@remix-run/server-runtime"
import React, { ReactElement } from "react"
import { useLoaderData } from "remix"

import { getAbis, getJsons } from "~/helpers"

export const loader: LoaderFunction = () => {
  const jsons = getJsons()

  return jsons
}

export default function Index(): ReactElement {
  const jsons = useLoaderData()
  const abis = getAbis(jsons)

  const IDENTATION = 2

  return (
    <div>
      <h1>Abi download</h1>
      {abis.map(({ id, methods }) => (
        <div key={id}>
          <h5>{id}</h5>
          <pre>{JSON.stringify(methods, null, IDENTATION)}</pre>
        </div>
      ))}
    </div>
  )
}
