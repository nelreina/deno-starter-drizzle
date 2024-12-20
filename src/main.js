import "https://deno.land/x/logging@v2.0.0/mod.ts";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { db } from "./config/postgres.js";
import eventHanlder from "./lib/event-handler.js";
import { connectToEventStream } from "./config/redis-client.js";

const PORT = Deno.env.get("SERVICE_PORT") || 8000;
const SERVICE_NAME = Deno.env.get("SERVICE_NAME") || "no-name-provided";
const STREAM = Deno.env.get("STREAM") || "tmp:stream";
Deno.addSignalListener("SIGTERM", () => {
  db.close();
  console.info("Shutting Down The app!");
  Deno.exit();
});

try {
  const app = new Hono();
  app.use(logger());
  app.get("/health-check", (c) => {
    return c.text("ok");
  });
  connectToEventStream(STREAM, eventHanlder);

  Deno.serve({ port: PORT }, app.fetch);
  console.info(`🚀 ${SERVICE_NAME} is running on http://localhost:${PORT}`);
} catch (error) {
  console.error("❗️ Error: ", error.message);
}
