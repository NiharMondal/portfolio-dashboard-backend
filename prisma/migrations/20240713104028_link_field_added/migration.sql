-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "back_end" TEXT,
ADD COLUMN     "front_end" TEXT,
ADD COLUMN     "live_link" TEXT NOT NULL DEFAULT 'hello';
