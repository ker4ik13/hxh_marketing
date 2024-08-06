-- DropIndex
DROP INDEX "Site_name_key";

-- CreateTable
CREATE TABLE "BotUser" (
    "id" BIGINT NOT NULL,
    "isBot" BOOLEAN NOT NULL DEFAULT false,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "username" TEXT,
    "languageCode" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BotUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BotUser_id_key" ON "BotUser"("id");
