import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import DnsRecordContext from '../context/DnsRecordContext';
const DNSRecordsTable = () => {
  const { recordValue, _ } = useContext(DnsRecordContext);
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
          {recordValue.map((record, index) =>
          (<TableRow key={index}>
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
