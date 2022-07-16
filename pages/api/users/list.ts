import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { User } from '@prisma/client';
import { PrismaSingleton } from '@lib/prisma';

const prisma = PrismaSingleton.getInstance();

/**
 * Get List of Users
 * @date 16/7/2022 - 8:16:28 pm
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const handler: NextApiHandler<User[]> = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const page = parseInt(
    req.query?.page?.at(0) ?? (req.query?.page as string) ?? '1'
  );
  const limit = parseInt(
    req.query?.limit?.at(0) ?? (req.query?.limit as string) ?? '10'
  );

  const users = await prisma.user.findMany({
    skip: page,
    take: limit,
  });

  res.json(users);
};

export default handler;
