import mongoose from 'mongoose';
const dnsRecordSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});
const dnsRecord = mongoose.model('dnsRecord', dnsRecordSchema);
export default dnsRecord

