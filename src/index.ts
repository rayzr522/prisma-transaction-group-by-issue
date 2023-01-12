import { PrismaClient } from '@prisma/client'
import { init } from './init.js'

const prisma = new PrismaClient()
await init(prisma)

const groupedUsers = await prisma.user.groupBy({
  by: ['type'],
  _count: { id: true },
})
console.log(groupedUsers[0]._count.id)

const groupByQuery = prisma.user.groupBy({
  by: ['type'],
  _count: { id: true },
})
const [groupedUsersInTransaction] = await prisma.$transaction([groupByQuery])
console.log(groupedUsersInTransaction[0]._count.id)

const [groupedUsersInTransactionInline] = await prisma.$transaction([
  prisma.user.groupBy({
    by: ['type'],
    _count: { id: true },
  }),
])
console.log(groupedUsersInTransactionInline[0]._count.id)
