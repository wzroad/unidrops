/*
  Warnings:

  - You are about to drop the column `user_id` on the `post` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "post_user_id_idx";

-- AlterTable
ALTER TABLE "post" DROP COLUMN "user_id";
