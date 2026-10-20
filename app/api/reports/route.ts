import { NextResponse } from 'next/server';
import { getReports, addReport } from '@/lib/data';
import { analyzeEnvironmentalIssue } from '@/lib/ai';
import { IncidentCategory, SeverityLevel, IncidentStatus } from '@/lib/types';

export async function GET() {
  try {
    const reports = getReports();
    return NextResponse.json({ success: true, reports });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to fetch reports' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      category,
      severity = 'Moderate',
      latitude = 0,
      longitude = 0,
      locationName,
      reportedBy = 'Student Eco-Monitor',
      evidenceImageUrl = 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
    } = body;

    if (!title || !description || !category || !locationName) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Run AI analysis
    const biologicalImpact = await analyzeEnvironmentalIssue({
      title,
      description,
      category: category as IncidentCategory,
      locationName
    });

    const newReport = addReport({
      title,
      description,
      category: category as IncidentCategory,
      severity: severity as SeverityLevel,
      status: 'Verified Active' as IncidentStatus,
      latitude: Number(latitude),
      longitude: Number(longitude),
      locationName,
      reportedBy,
      evidenceImageUrl,
      biologicalImpact
    });

    return NextResponse.json({ success: true, report: newReport }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to create report' }, { status: 500 });
  }
}
