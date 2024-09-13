// import { PrismaClient } from '@prisma/client'
// import { faker } from '@faker-js/faker'
// import { auth } from '@clerk/nextjs/server'

// const prisma = new PrismaClient()

// async function main() {

//   const {userId} = auth()

//   // Generate Fake Data For ToDo Model ??
//   await prisma.todo.createMany({
//     data: Array.from( {length: 25}, () => ({
//       title: faker.lorem.words({min: 2, max: 8}),
//       body: faker.lorem.words({min: 2, max: 15}),
//       user_id: userId as string,
//     }))
//   })

//   // Generate Fake Data For User Model ??
//   await prisma.user.createMany({
//     data: Array.from( {length: 25}, () => ({
//       email: faker.internet.email(),
//       name: faker.internet.userName(),
//       address: {
//         street: faker.location.street(),
//         city: faker.location.city(),
//         state: faker.location.state(),
//         zip: faker.location.zipCode()
//       }
//     }))
//   })
// }

// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })