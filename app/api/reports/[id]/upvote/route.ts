import { NextResponse } from 'next/server';
import { upvoteReport } from '@/lib/data';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updated = upvoteReport(id);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Report not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, report: updated });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to upvote' }, { status: 500 });
  }
}
