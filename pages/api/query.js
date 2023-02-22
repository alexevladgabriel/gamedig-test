// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { query } from "gamedig"

export default async function handler(req, res) {
  const { ip, port, type } = req.query;
  try {
    const response = await query({
      type: type ?? "csgo",
      host: ip ?? "romania.laleagane.ro",
      port: port ?? 27015,
    });
    res.status(200).json({ ...response })
  } catch(e) {
    res.status(500).json({ error: e.message })
  }
}
