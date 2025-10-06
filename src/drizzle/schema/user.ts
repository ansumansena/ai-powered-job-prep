import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { JobInfoTable } from "./jobInfo";

export const UserTable = pgTable("users", {
  // only for the usertable, using id instead of uuid as this is hooked up with clerk which doesn't use uuid instead uses string
  id: varchar().primaryKey(),    
  name: varchar().notNull(),
  email: varchar().notNull().unique(),
  imageUrl: varchar().notNull(),
  createdAt,
  updatedAt
});

export const UserRelations = relations(UserTable, ({many}) => ({
    jobInfos : many(JobInfoTable)
}));