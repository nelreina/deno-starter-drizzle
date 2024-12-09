CREATE TABLE IF NOT EXISTS "event_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"stream_id" varchar(256) NOT NULL,
	"event" varchar(256) NOT NULL,
	"aggregate_id" varchar(56) NOT NULL,
	"payload" text NOT NULL,
	"timestamp" varchar,
	"service_name" varchar(256),
	"created_at" timestamp DEFAULT now() NOT NULL
);
