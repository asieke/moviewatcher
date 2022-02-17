import { search } from '../../lib/db';

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  found: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const year: number = parseInt(req.query.year as string);
  const name: string = (req.query.name as string).toLowerCase();

  res.status(200).json({ found: search(name, year) });
}
