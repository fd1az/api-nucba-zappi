import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Prisma create query to seed models in database
  // await prisma.role.createMany({
  //   data: [{ role: 'admin' }, { role: 'user' }],
  // });
  // await prisma.category.createMany({
  //   data: [
  //     {
  //       category: 'Pizzas',
  //       imgTag: 'img/tag_pizza.jpeg',
  //     },

  //     {
  //       category: 'Burgers',
  //       imgTag: 'img/tag_burger.jpeg',
  //     },

  //     {
  //       category: 'Sambuchitos',
  //       imgTag: 'img/tag_sambu.jpeg',
  //     },
  //   ],
  // });

  await prisma.products.createMany({
    data: [
      {
        name: 'Pizza Tranca',
        imgUrl: '/img/pizza1.jpg',
        categoryId: 1,
        description:
          'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
        price: 100,
      },
      {
        name: 'Pizza Mix',
        imgUrl: '/img/pizza2.jpg',
        categoryId: 1,
        description:
          'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
        price: 100,
      },
      {
        name: 'Pizza Mix',
        imgUrl: '/img/pizza2.jpg',
        categoryId: 1,
        description:
          'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
        price: 100,
      },
      {
        name: 'Burger Zarpada',
        imgUrl: '/img/burger1.jpg',
        categoryId: 2,
        description:
          'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
        price: 100,
      },
      {
        name: 'Burger en la pera',
        imgUrl: '/img/burger2.jpg',
        categoryId: 2,
        description:
          'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
        price: 100,
      },
      {
        name: 'Burger Zarpada',
        imgUrl: '/img/burger1.jpg',
        categoryId: 2,
        description:
          'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
        price: 100,
      },
      {
        name: 'Sambuchito 1',
        imgUrl: '/img/sanbu1.jpg',
        categoryId: 3,
        description:
          'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
        price: 100,
      },
      {
        name: 'Sambuchito 2',
        imgUrl: '/img/sanbu2.jpg',
        categoryId: 3,
        description:
          'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
        price: 100,
      },
      {
        name: 'Sambuchito 1',
        imgUrl: '/img/sanbu1.jpg',
        categoryId: 3,
        description:
          'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
        price: 100,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
