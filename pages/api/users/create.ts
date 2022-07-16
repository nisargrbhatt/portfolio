import { User } from '@prisma/client';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { PrismaSingleton } from '@lib/prisma';

const prisma = PrismaSingleton.getInstance();

/**
 * Add User
 * @date 16/7/2022 - 8:28:18 pm
 * @author Nisarg Bhatt
 * @async
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const handler: NextApiHandler<User> = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = req.body;
  const user = await prisma.user.create({
    data,
  });

  res.json(user);
};

export default handler;
