/*
  Warnings:

  - You are about to drop the `vip_info` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vip_order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "vip_info";

-- DropTable
DROP TABLE "vip_order";

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "payment_address" TEXT NOT NULL,
    "unit" TEXT NOT NULL DEFAULT 'ETH',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_order" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "product_order_user_id_idx" ON "product_order"("user_id");

-- CreateIndex
CREATE INDEX "product_order_product_id_idx" ON "product_order"("product_id");
