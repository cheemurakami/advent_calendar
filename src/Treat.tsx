import React, { useEffect, useState } from "react";
import { Modal, Typography, Box } from "@material-ui/core/";

interface Props {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  selectedDay: number | null;
}

const Treat = (props: Props) => {
  const { modalOpen, setModalOpen, selectedDay } = props;
  const [daysToChristmas, setDaysToChristmas] = useState<number | null>(null);

  useEffect(() => {
    if (selectedDay) {
      setDaysToChristmas(25 - selectedDay)
    }
  }, [selectedDay]);

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {daysToChristmas} more days till Santa!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Treat;
