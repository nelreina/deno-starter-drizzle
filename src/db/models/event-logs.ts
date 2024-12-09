import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const eventLogs = pgTable("event_logs", {
  id: serial("id").primaryKey(),
  streamId : varchar("stream_id", {length: 256}).notNull(),
  event : varchar("event", {length: 256}).notNull(),
  aggregateId: varchar("aggregate_id", {length: 56}).notNull(),
  payload: text("payload").notNull(),
  timestamp: varchar("timestamp").notNull(),
  serviceName: varchar("service_name", {length: 256}),
  createdAt: timestamp('created_at').notNull().defaultNow(),

});

