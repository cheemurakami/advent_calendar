import React, { useEffect, useState } from "react";
import { Modal, Typography, Box } from "@material-ui/core/";
import { styled } from 'styled-components'

interface Props {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  selectedDay: number | null;
  gif: string;
  showGif: boolean;
}

const Treat = (props: Props) => {
  const { modalOpen, setModalOpen, selectedDay, gif, showGif } = props;
  const [daysToChristmas, setDaysToChristmas] = useState<number | null>(null);

  useEffect(() => {
    if (selectedDay) {
      setDaysToChristmas(25 - selectedDay)
    }
  }, [selectedDay]);

  return (
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
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {daysToChristmas} more days till Santa!
        </Typography>
        {showGif && (
          <ImageContainer>
            <Image src={gif} alt='gif' />
          </ImageContainer>
        )}
      </Box>
    </Modal>
  );
};

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
`
const Image = styled.img`
  max-width: 100%;
`

export default Treat;
