// seed.js
const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  // 1) User 시드 (5명)
  console.log("🌱 Seeding User...");
  const createdUsers = [];
  for (let i = 0; i < 5; i++) {
    const user = await prisma.user.create({
      data: {
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        profileImageUrl: faker.image.avatar(), // 프로필 이미지
      },
    });
    createdUsers.push(user);
  }

  // 2) Category 시드 (Enum이지만, DB에 직접 넣어야 한다면 아래처럼)
  //    본인 스키마에 맞춰서 'CAKE_MUFFIN', 'COOKIE' 등도 원하는 만큼 생성하거나,
  //    이미 category 테이블에 들어있다면 생략해도 됩니다.
  console.log("🌱 Seeding Category...");
  const recipeCategories = [
    "BREAD",
    "CAKE_MUFFIN",
    "TART_PIE",
    "COOKIE",
    "CHOCOLATE",
    "OTHER",
  ];
  const createdCategories = [];
  for (let cat of recipeCategories) {
    const category = await prisma.category.create({
      data: {
        name: cat, // enum값과 동일한 이름
      },
    });
    createdCategories.push(category);
  }

  // 3) Tag 시드 (10개)
  console.log("🌱 Seeding Tag...");
  const createdTags = [];
  for (let i = 0; i < 10; i++) {
    const tag = await prisma.tag.create({
      data: {
        name: faker.word.noun() + i, // 중복 방지용으로 i 붙이기
      },
    });
    createdTags.push(tag);
  }

  // 4) Recipe 시드 (30개)
  console.log("🌱 Seeding Recipe...");
  const createdRecipes = [];
  for (let i = 0; i < 30; i++) {
    const randomUser =
      createdUsers[Math.floor(Math.random() * createdUsers.length)];
    const randomCategory =
      createdCategories[Math.floor(Math.random() * createdCategories.length)];

    const recipe = await prisma.recipe.create({
      data: {
        userId: randomUser.id,
        categoryId: randomCategory.id,
        title: faker.lorem.words(3),
        description: faker.lorem.paragraph(),
        imageUrl: faker.image.urlPicsumPhotos({
          width: 400,
          height: 300,
          grayscale: false,
          blur: 0,
        }),
        visibility: "PUBLIC", // 또는 'PRIVATE' 등
      },
    });
    createdRecipes.push(recipe);
  }

  // 5) RecipeTag 시드 (각 레시피마다 랜덤으로 2~3개 태그 연결)
  console.log("🌱 Seeding RecipeTag...");
  for (const recipe of createdRecipes) {
    // 2~3개 랜덤 태그 뽑기
    const howManyTags = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const shuffledTags = createdTags.sort(() => 0.5 - Math.random());
    const selectedTags = shuffledTags.slice(0, howManyTags);

    for (const tag of selectedTags) {
      await prisma.recipeTag.create({
        data: {
          recipeId: recipe.id,
          tagId: tag.id,
        },
      });
    }
  }

  // 6) RecipeIngredient 시드 (각 레시피에 재료 3개씩)
  console.log("🌱 Seeding RecipeIngredient...");
  for (const recipe of createdRecipes) {
    for (let i = 0; i < 3; i++) {
      await prisma.recipeIngredient.create({
        data: {
          recipeId: recipe.id,
          ingredient: faker.commerce.productName(), // 임의의 재료명
          quantity: `${faker.number.int({ min: 50, max: 300 })}g`, // 임의의 양
        },
      });
    }
  }

  // 7) RecipeStep 시드 (각 레시피에 3단계씩)
  console.log("🌱 Seeding RecipeStep...");
  for (const recipe of createdRecipes) {
    for (let stepNum = 1; stepNum <= 3; stepNum++) {
      await prisma.recipeStep.create({
        data: {
          recipeId: recipe.id,
          stepNumber: stepNum,
          instruction: faker.lorem.sentence(),
        },
      });
    }
  }

  // 8) Review 시드 (랜덤으로 각 레시피 0~5개)
  console.log("🌱 Seeding Review...");
  for (const recipe of createdRecipes) {
    const reviewCount = Math.floor(Math.random() * 6); // 0~5
    for (let i = 0; i < reviewCount; i++) {
      const randomUser =
        createdUsers[Math.floor(Math.random() * createdUsers.length)];
      await prisma.review.create({
        data: {
          recipeId: recipe.id,
          userId: randomUser.id,
          rating: faker.number.int({ min: 1, max: 5 }),
          comment: faker.lorem.sentences(2),
        },
      });
    }
  }

  // 9) Favorite 시드 (랜덤으로 20개)
  console.log("🌱 Seeding Favorite...");
  for (let i = 0; i < 20; i++) {
    const randomUser =
      createdUsers[Math.floor(Math.random() * createdUsers.length)];
    const randomRecipe =
      createdRecipes[Math.floor(Math.random() * createdRecipes.length)];

    // 이미 있는지 확인
    const existFavorite = await prisma.favorite.findUnique({
      where: {
        userId_recipeId: {
          userId: randomUser.id,
          recipeId: randomRecipe.id,
        },
      },
    });

    // 없으면 생성
    if (!existFavorite) {
      await prisma.favorite.create({
        data: {
          userId: randomUser.id,
          recipeId: randomRecipe.id,
        },
      });
    }
  }

  // 10) Like 시드 (랜덤으로 20개)
  console.log("🌱 Seeding Like...");
  for (let i = 0; i < 20; i++) {
    const randomUser =
      createdUsers[Math.floor(Math.random() * createdUsers.length)];
    const randomRecipe =
      createdRecipes[Math.floor(Math.random() * createdRecipes.length)];

    const existingLike = await prisma.like.findUnique({
      where: {
        userId_recipeId: {
          userId: randomUser.id,
          recipeId: randomRecipe.id,
        },
      },
    });

    if (!existingLike) {
      await prisma.like.create({
        data: {
          userId: randomUser.id,
          recipeId: randomRecipe.id,
        },
      });
    }
  }

  console.log("✅ Seeding Completed Successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
