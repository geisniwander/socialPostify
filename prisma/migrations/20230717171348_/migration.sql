/*
  Warnings:

  - Added the required column `text` to the `Publication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Publication" ADD COLUMN     "text" TEXT NOT NULL;
