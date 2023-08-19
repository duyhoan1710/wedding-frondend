import mongoose from "mongoose";

const WeddingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    version: {
      type: Number,
      required: true,
    },
    template: {
      type: Object,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

WeddingSchema.index({ createdBy: 1 });
WeddingSchema.index({ createdBy: 1, name: 1 }, { unique: true });

export default mongoose.models.Wedding ||
  mongoose.model("Wedding", WeddingSchema);
