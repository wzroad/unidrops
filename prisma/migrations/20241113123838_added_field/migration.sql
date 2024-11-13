/*
  Warnings:

  - Added the required column `course_id` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "course" ADD COLUMN     "course_id" INTEGER NOT NULL;
