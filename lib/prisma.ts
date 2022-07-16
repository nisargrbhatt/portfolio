// import { PrismaClient } from '@prisma/client';

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!global?.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma as PrismaClient;
// }

// export default prisma;

import { PrismaClient } from '@prisma/client';

/**
 * PrismaSingleton Class
 * @date 16/7/2022 - 10:26:07 pm
 *
 * @class PrismaSingleton
 * @typedef {PrismaSingleton}
 */
export class PrismaSingleton {
  private static instance: PrismaClient;

  /**
   * Creates an instance of PrismaSingleton.
   * @date 16/7/2022 - 10:25:42 pm
   *
   * @constructor
   * @private
   */
  private constructor() {}

  /**
   * Gets Singleton instance of PrismaClient
   * @date 16/7/2022 - 10:25:52 pm
   *
   * @public
   * @static
   * @return {PrismaClient}
   */
  public static getInstance(): PrismaClient {
    if (!PrismaSingleton.instance) {
      PrismaSingleton.instance = new PrismaClient();
    }

    return PrismaSingleton.instance;
  }
}
