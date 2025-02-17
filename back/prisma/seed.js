import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const seedRecipes = async () => {
  console.log("🌱 Seeding Recipe Data...");

  for (let i = 0; i < 30; i++) {
    await prisma.recipe.create({
      data: {
        userId: "ba7fbf0d-dcc3-4f66-a916-f58829479196", // ✅ 실제 존재하는 userId로 변경
        categoryId: "b1a8f5d3-9e3c-4a5e-b7a9-2f6d4b0a7e3f", // ✅ 실제 존재하는 categoryId로 변경
        title: faker.lorem.words(3), // ✅ 랜덤 제목 생성
        description: faker.lorem.paragraph(), // ✅ 랜덤 설명 생성
        visibility: "PUBLIC", // ✅ 기본값 사용
      },
    });
  }

  console.log("✅ Recipe Seeding Completed!");
};

seedRecipes()
  .catch((error) => {
    console.error("❌ Error seeding data:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
