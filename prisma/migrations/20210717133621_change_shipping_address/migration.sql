/*
  Warnings:

  - You are about to drop the column `shippingDetailsId` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `ordersId` to the `ShippingDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_shippingDetailsId_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "shippingDetailsId";

-- AlterTable
ALTER TABLE "ShippingDetails" ADD COLUMN     "ordersId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ShippingDetails" ADD FOREIGN KEY ("ordersId") REFERENCES "Orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
