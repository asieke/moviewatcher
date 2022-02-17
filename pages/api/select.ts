// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string;
};

const API_KEY = process.env.API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const URL = `https://api.themoviedb.org/3/movie/${req.query.id}?api_key=${API_KEY}`;
  let response = await axios.get(URL);
  res.status(200).json(response.data);
}
