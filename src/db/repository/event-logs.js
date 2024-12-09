import { db } from "../db.ts";
import {eventLogs } from "../models/event-logs.ts";
import { eq } from "drizzle-orm";

export class EventLogRepository {
  async findAll() {
    const results = await db.select().from(eventLogs);

    return results;
  }

  async find(id){
    const result = await db.query.eventLogs.findFirst({
      where: eq(eventLogs.id, id),
    });

    return result ?? null;
  }

  async create(eventLog){
    const [result] = await db.insert(eventLogs).values(eventLog).returning();

    return result;
  }

  async delete(id) {
    await db.delete(eventLogs).where(eq(eventLogs.id, id));
  }
}

export const eventLogRepository = new EventLogRepository();
