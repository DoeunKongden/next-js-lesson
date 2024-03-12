-- CreateTable
CREATE TABLE "dummyMeal" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "instruction" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "creator_email" TEXT NOT NULL,

    CONSTRAINT "dummyMeal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dummyMeal_slug_key" ON "dummyMeal"("slug");
