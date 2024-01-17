import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const DNSRecordsTable = ({ dnsRecords }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Record Type</TableCell>
            <TableCell>Record Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dnsRecords.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.type}</TableCell>
              <TableCell>{record.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DNSRecordsTable;
