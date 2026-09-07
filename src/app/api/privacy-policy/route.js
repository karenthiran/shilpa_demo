import { NextResponse } from 'next/server';
import connectMongo from '@/app/lib/mongodb';
import LegalDocument from '@/app/models/legalDocument';

export async function GET() {
  await connectMongo();

  try {
    const document = await LegalDocument.findOne({
      type: { $in: ['privacy-policy', 'privacyPolicy', 'privacy_policy'] },
    }).lean();

    if (!document) {
      return NextResponse.json(
        { error: 'Privacy policy not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(document, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch privacy policy:', error);
    return NextResponse.json(
      { error: 'Failed to fetch privacy policy' },
      { status: 500 }
    );
  }
}

