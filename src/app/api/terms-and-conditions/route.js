import { NextResponse } from 'next/server';
import connectMongo from '@/app/lib/mongodb';
import LegalDocument from '@/app/models/legalDocument';

export async function GET() {
  await connectMongo();

  try {
    const document = await LegalDocument.findOne({
      type: { $in: ['terms-and-conditions', 'terms_conditions', 'tnc'] },
    }).lean();

    if (!document) {
      return NextResponse.json(
        { error: 'Terms and conditions not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(document, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch terms and conditions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch terms and conditions' },
      { status: 500 }
    );
  }
}

