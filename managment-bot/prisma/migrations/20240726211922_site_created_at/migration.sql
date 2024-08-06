/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Site` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Site_name_key";

-- AlterTable
ALTER TABLE "Site" DROP COLUMN "createdAt";
