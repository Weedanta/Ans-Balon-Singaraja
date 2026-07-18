import { existsSync } from "node:fs";
import { join } from "node:path";

export function hasLogoFile() {
  return existsSync(join(process.cwd(), "public", "logo.png"));
}
