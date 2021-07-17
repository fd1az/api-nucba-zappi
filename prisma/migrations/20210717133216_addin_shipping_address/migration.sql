/*
  Warnings:

  - Added the required column `shippingDetailsId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "shippingDetailsId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD FOREIGN KEY ("shippingDetailsId") REFERENCES "ShippingDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;
