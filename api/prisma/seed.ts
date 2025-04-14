import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

/**
 * Seed data for the database
 */
async function main() {
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'john.doe@example.com',
        name: 'John Doe',
        passwordHash: await bcrypt.hash('password123', 10),
      },
    }),
    prisma.user.create({
      data: {
        email: 'jane.smith@example.com',
        name: 'Jane Smith',
        passwordHash: await bcrypt.hash('password123', 10),
      },
    }),
    prisma.user.create({
      data: {
        email: 'bob.wilson@example.com',
        name: 'Bob Wilson',
        passwordHash: await bcrypt.hash('password123', 10),
      },
    }),
  ]);

  // Create products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        title: 'Premium Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 299.99,
      },
    }),
    prisma.product.create({
      data: {
        title: 'Smart Watch',
        description: 'Feature-rich smartwatch with health tracking',
        price: 199.99,
      },
    }),
    prisma.product.create({
      data: {
        title: 'Laptop Pro',
        description: 'Powerful laptop for professionals',
        price: 1299.99,
      },
    }),
  ]);

  console.log('Seed data created successfully!');
  console.log('Created users:', users);
  console.log('Created products:', products);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
