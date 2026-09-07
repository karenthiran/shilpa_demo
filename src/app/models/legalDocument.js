import mongoose from 'mongoose';

const legalDocumentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

legalDocumentSchema.index({ type: 1 }, { unique: true });

const LegalDocument =
  mongoose.models.LegalDocument ||
  mongoose.model('LegalDocument', legalDocumentSchema, 'legal_documents');

export default LegalDocument;

