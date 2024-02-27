import { NextApiRequest, NextApiResponse } from 'next';
import { signOut } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await signOut({ redirect: false });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}