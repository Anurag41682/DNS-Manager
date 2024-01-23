import React, { useState, useContext } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { add } from '../../api';
import DnsRecordContext from '../context/DnsRecordContext';

const DNSForm = () => {
  const { _, setRecordValue } = useContext(DnsRecordContext);
  const [dnsType, setDnsType] = useState("");
  const [dnsValue, setDnsValue] = useState("");
  const handleSubmit = () => {
    if (dnsType && dnsValue) {
      const newRecord = { type: dnsType, value: dnsValue };
      const res = add(newRecord);
      res.then((res) => {
        setRecordValue((prevRecordValue) => [...prevRecordValue, newRecord]);
        console.log(res);
      }).catch((err) => console.log(err));
    }
  };

  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      <FormControl fullWidth>
        <InputLabel id="record-type-label">Record Type</InputLabel>
        <Select
          labelId="record-type-label"
          id="record-type"
          value={dnsType}
          label="Record Type"
          onChange={e => setDnsType(e.target.value)}
        >
          <MenuItem value="A">A (Address) Record</MenuItem>
          <MenuItem value="AAAA">AAAA (IPv6 Address) Record</MenuItem>
          <MenuItem value="CNAME">CNAME (Canonical Name) Record</MenuItem>
          <MenuItem value="MX">MX (Mail Exchange) Record </MenuItem>
          <MenuItem value="NS">NS (Name Server) Record</MenuItem>
          <MenuItem value="PTR">PTR (Pointer) Record</MenuItem>
          <MenuItem value="SOA">SOA (Start of Authority) Record</MenuItem>
          <MenuItem value="SRV">SRV (Service) Record</MenuItem>
          <MenuItem value="TXT">TXT (Text) Record</MenuItem>
          <MenuItem value="DNSSEC">DNSSEC</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Record Value"
        variant="outlined"
        margin="normal"
        value={dnsValue}
        onChange={e => setDnsValue(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add DNS Record
      </Button>
    </div>
  );
};

export default DNSForm;

