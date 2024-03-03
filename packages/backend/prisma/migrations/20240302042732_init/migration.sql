/*
  Warnings:

  - You are about to drop the column `todo_id` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `todo_id`;

-- CreateIndex
CREATE UNIQUE INDEX `user_id_key` ON `user`(`id`);
