import { CUPS_PER_PACK } from "@/lib/constants";
import { appendRecord } from "@/lib/store";
import {
  normalizeDigits,
  validateOrder,
  type OrderInput,
} from "@/lib/validation";

export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, errors: ["بدنه درخواست معتبر نیست."] },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return Response.json(
      { ok: false, errors: ["بدنه درخواست معتبر نیست."] },
      { status: 400 },
    );
  }

  const raw = body as Record<string, unknown>;
  const input: OrderInput = {
    stationName: String(raw.stationName ?? "").trim(),
    mobile: normalizeDigits(String(raw.mobile ?? "")),
    cityArea: String(raw.cityArea ?? "").trim(),
    packs:
      typeof raw.packs === "number"
        ? raw.packs
        : Number.parseInt(String(raw.packs ?? "0"), 10),
    note: String(raw.note ?? "").trim(),
  };

  const errors = validateOrder(input);
  if (errors.length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const stored = await appendRecord("orders.json", {
    ...input,
    totalCups: input.packs * CUPS_PER_PACK,
    source: "landing-order",
  });
  return Response.json({ ok: true, id: stored.id }, { status: 201 });
}
