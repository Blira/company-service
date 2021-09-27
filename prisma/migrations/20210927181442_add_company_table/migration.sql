-- CreateTable
CREATE TABLE "company" (
    "id" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "active" BOOLEAN DEFAULT true,
    "plan" INTEGER DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "company_id_key" ON "company"("id");

-- CreateIndex
CREATE UNIQUE INDEX "company_name_key" ON "company"("name");
