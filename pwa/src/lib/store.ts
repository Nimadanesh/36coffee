import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * ذخیره‌سازی فایل‌محور برای نسخه MVP.
 * رکوردها در pwa/data/leads.json و pwa/data/orders.json ذخیره می‌شوند.
 * این پوشه در .gitignore است و هرگز کامیت نمی‌شود.
 * برای نسخه واقعی باید با دیتابیس و احراز هویت جایگزین شود.
 */

export interface StoredRecord {
  id: string;
  createdAt: string;
  [key: string]: unknown;
}

type DataFile = "leads.json" | "orders.json";

function dataFilePath(file: DataFile): string {
  return path.join(process.cwd(), "data", file);
}

export async function readRecords(file: DataFile): Promise<StoredRecord[]> {
  try {
    const raw = await fs.readFile(dataFilePath(file), "utf-8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredRecord[]) : [];
  } catch {
    return [];
  }
}

export async function appendRecord(
  file: DataFile,
  record: Record<string, unknown>,
): Promise<StoredRecord> {
  const dir = path.join(process.cwd(), "data");
  await fs.mkdir(dir, { recursive: true });
  const records = await readRecords(file);
  const stored: StoredRecord = {
    ...record,
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
  await fs.writeFile(
    dataFilePath(file),
    JSON.stringify([...records, stored], null, 2),
    "utf-8",
  );
  return stored;
}
