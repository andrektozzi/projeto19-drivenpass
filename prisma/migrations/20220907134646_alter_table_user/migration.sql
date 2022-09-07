/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "wifi_userId_title_key";

-- AlterTable
ALTER TABLE "cards" ALTER COLUMN "ExpirationDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "name";
