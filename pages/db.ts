//separate file do to Hot Reload and 
//next constantly create new connection 
//to prisma client. The solution is to instantiate
//a single instance/client of PrismaClient and save it to 
//the glabal object.
//instantiate a SINGLETON
import { PrismaClient } from "@prisma/client";

//set prisma client on to global object
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
};

//if globalForPrisma variable is not on the global object 
//set it now
//otherwise create a brand new prisma client
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  });

//if not in production get prisma from the global variable
if (process.env.NODE_ENV === 'production') globalForPrisma.prisma = prisma;
