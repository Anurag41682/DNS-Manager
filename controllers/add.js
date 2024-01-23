import dnsRecord from "../models/dnsRecord.js"
const add = async (req, res) => {
  try {
    const { value, type } = req.body.data;
    const email = req.decodedToken.email;
    const newRecord = new dnsRecord({ value, type, email });
    await newRecord.save();
    res.status(201).json({ message: 'Record saved successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err });
  }
}
export default add;