import { run } from "@drizzle-team/brocli";
import migrateDatabaseCommand from "./commands/migrate.ts";

await run([migrateDatabaseCommand], {
  name: "DenoDrizzleDemo",
  description: "Deno Drizzle Demo",
  version: "0.1.0",
});
