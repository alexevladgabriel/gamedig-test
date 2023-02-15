// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { query } from "gamedig"

export default async function handler(req, res) {
  const response = await query({
    type: "csgo",
    host: "romania.laleagane.ro",
    port: 27015,
  });

  res.status(200).json({ ...response })
}
