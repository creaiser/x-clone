/*
  Warnings:

  - You are about to drop the column `isSensetive` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `isSensetive`,
    ADD COLUMN `isSensitive` BOOLEAN NOT NULL DEFAULT false;
