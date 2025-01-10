import { useState } from "react";
import { motion } from "motion/react";
const Ticket = () => {
  return (
    <motion.div>
      <div className="ticket">
        <div className="ticket-header">
          <h2>Concert Ticket</h2>
        </div>
        <div className="ticket-body">
          <div>
            <strong>Event:</strong> Live Concert 2023
          </div>
          <div>
            <strong>Date:</strong> December 15, 2023
          </div>
          <div>
            <strong>Time:</strong> 7:00 PM
          </div>
          <div>
            <strong>Seat:</strong> Section A, Row 5, Seat 12
          </div>
          <div className="qr-code"></div>
        </div>
        <div className="ticket-footer">
          <p>Scan the QR code for entry</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Ticket;
