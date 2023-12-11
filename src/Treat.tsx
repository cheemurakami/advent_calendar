import { Modal, Typography, Box } from "@material-ui/core/";
import { styled } from 'styled-components'

interface Props {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  gif: string;
  showGif: boolean;
  modalText: string;
}

const Treat = (props: Props) => {
  const {
    modalOpen,
    setModalOpen,
    gif,
    showGif,
    modalText,
  } = props;

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
          {modalText}
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
  justify-content: center;
  height: 100%;
  width: 80%;
`
const Image = styled.img`
  max-width: 100%;
`

export default Treat;
