import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

const DNSForm = ({ onAddDNSRecord }) => {
  const [recordType, setRecordType] = useState('');
  const [recordValue, setRecordValue] = useState('');

  const handleSubmit = () => {
    if (recordType && recordValue) {
      const newRecord = { type: recordType, value: recordValue };
      onAddDNSRecord(newRecord);
      setRecordType('');
      setRecordValue('');
    }
  };

  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      <FormControl fullWidth>
        <InputLabel id="record-type-label">Record Type</InputLabel>
        <Select
          labelId="record-type-label"
          id="record-type"
          value={recordType}
          label="Record Type"
          onChange={e => setRecordType(e.target.value)}
        >
          <MenuItem value="A">A (Address) Record</MenuItem>
          <MenuItem value="AAAA">AAAA (IPv6 Address) Record</MenuItem>
          <MenuItem value="CNAME">CNAME (Canonical Name) Record</MenuItem>
          {/* Add other DNS record types here */}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Record Value"
        variant="outlined"
        margin="normal"
        value={recordValue}
        onChange={e => setRecordValue(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add DNS Record
      </Button>
    </div>
  );
};

export default DNSForm;
