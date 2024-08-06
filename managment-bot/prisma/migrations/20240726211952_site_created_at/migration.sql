/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Site` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Site_name_key" ON "Site"("name");
