// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string;
};

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=`;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let response = await axios.get(SEARCH_URL + req.query.query);
  res.status(200).json(response.data);
}
