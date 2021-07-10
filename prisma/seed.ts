import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seed() {
  // Prisma create query to seed models in database
  await prisma.role.createMany({
    data: [{ role: 'admin' }, { role: 'user' }],
  });
}
