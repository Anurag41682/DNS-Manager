import React, { useState } from "react";
import { Container, Typography, CssBaseline, Paper } from "@mui/material";
import DNSForm from "./DNSForm";
import DNSRecordsTable from "./DNSTable";

const Dashboard = () => {
  const [dnsRecords, setDNSRecords] = useState([]);

  const handleAddDNSRecord = (record) => {
    setDNSRecords((prevRecords) => [...prevRecords, record]);
  };

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          DNS Dashboard
        </Typography>
        <DNSForm onAddDNSRecord={handleAddDNSRecord} />
        <DNSRecordsTable dnsRecords={dnsRecords} />
      </Paper>
    </Container>
  );
};

export default Dashboard;
