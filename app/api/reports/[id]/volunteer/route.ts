import { NextResponse } from 'next/server';
import { volunteerForReport } from '@/lib/data';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updated = volunteerForReport(id);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Report not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, report: updated });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to volunteer' }, { status: 500 });
  }
}
