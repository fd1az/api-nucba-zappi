/*
  Warnings:

  - A unique constraint covering the columns `[state]` on the table `States` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "States.state_unique" ON "States"("state");
