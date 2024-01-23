import { useState } from "react";
import DnsRecordContext from "../context/DnsRecordContext"
const DnsRecordContextProvider = ({ children }) => {
  const [recordValue, setRecordValue] = useState([]);
  return (
    <DnsRecordContext.Provider
      value={{ recordValue, setRecordValue }}>
      {children}
    </DnsRecordContext.Provider>
  )
}
export default DnsRecordContextProvider;
