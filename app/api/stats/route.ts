import { NextResponse } from 'next/server';
import { getCommunityMetrics } from '@/lib/data';

export async function GET() {
  try {
    const stats = getCommunityMetrics();
    return NextResponse.json({ success: true, stats });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to fetch stats' }, { status: 500 });
  }
}
