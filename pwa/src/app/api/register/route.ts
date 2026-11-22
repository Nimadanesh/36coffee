import { appendRecord } from "@/lib/store";
import {
  normalizeDigits,
  validateRegistration,
  type RegistrationInput,
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

  const input: RegistrationInput = {
    stationName: String(
      (body as Record<string, unknown>).stationName ?? "",
    ).trim(),
    ownerName: String((body as Record<string, unknown>).ownerName ?? "").trim(),
    mobile: normalizeDigits(
      String((body as Record<string, unknown>).mobile ?? ""),
    ),
    cityArea: String((body as Record<string, unknown>).cityArea ?? "").trim(),
    locationType: String(
      (body as Record<string, unknown>).locationType ?? "",
    ).trim(),
  };

  const errors = validateRegistration(input);
  if (errors.length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const stored = await appendRecord("leads.json", {
    ...input,
    source: "landing-register",
  });
  return Response.json({ ok: true, id: stored.id }, { status: 201 });
}
