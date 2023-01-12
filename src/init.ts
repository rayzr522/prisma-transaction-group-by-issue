import { PrismaClient } from '@prisma/client'

export const init = async (prisma: PrismaClient) => {
  // delete existing
  await prisma.user.deleteMany()

  // create some exmaple users
  await prisma.$transaction([
    prisma.user.create({
      data: {
        email: 'abc@example.com',
        name: 'abc',
        type: 'USER',
      },
    }),
    prisma.user.create({
      data: {
        email: 'def@example.com',
        name: 'def',
        type: 'USER',
      },
    }),
    prisma.user.create({
      data: {
        email: 'ghi@example.com',
        name: 'ghi',
        type: 'ADMIN',
      },
    }),
    prisma.user.create({
      data: {
        email: 'jkl@example.com',
        name: 'jkl',
        type: 'USER',
      },
    }),
    prisma.user.create({
      data: {
        email: 'mno@example.com',
        name: 'mno',
        type: 'ADMIN',
      },
    }),
  ])
}
