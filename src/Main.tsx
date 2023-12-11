import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Treat from "./Treat";

const Main: React.FC = () => {
  const weekCols = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thurs: 4,
    Fri: 5,
    Sat: 6,
  };

  const [openedDays, setOpenedDays] = useState<any>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [gifURLs, setGifURLs] = useState<any>([]);
  const [gif, setGif] = useState<string>("");
  const [today, setToday] = useState<number | null>(null);
  const [showGif, setShowGif] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    const data = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=christmas`,
    );

    const resp = await data.json();
    setGifURLs(resp.data);
  };

  useEffect(() => {
    const day = new Date().getUTCDate();
    setToday(day);
  }, []);

  const WeekHeader: React.FC = () => {
    const weeks = Object.keys(weekCols);
    return (
      <>
        {weeks.map((week) => (
          <Grid key={week}>{week}</Grid>
        ))}
      </>
    );
  };

  const Days: React.FC = () => {
    // TODO: create some func to generate weeks and days
    const firstWeek = [null, null, null, null, null, 1, 2];
    const secondWeek = [3, 4, 5, 6, 7, 8, 9];
    const thirdWeek = [10, 11, 12, 13, 14, 15, 16];
    const fourthWeek = [17, 18, 19, 20, 21, 22, 23];
    const fifthWeek = [24, 25, 26, 27, 28, 29, 30];
    const sixthWeek = [31, null, null, null, null, null, null];

    const allWeeks = [
      firstWeek,
      secondWeek,
      thirdWeek,
      fourthWeek,
      fifthWeek,
      sixthWeek,
    ];

    return (
      <>
        {allWeeks.map((weeks) => (
          <Row>
            {weeks.map((day, i) => (
              <Grid key={i} onClick={() => handleClick(day)}>
                {day}
              </Grid>
            ))}
          </Row>
        ))}
      </>
    );
  };

  const handleClick = (clickedDay: number | null) => {
    if (clickedDay) {
      setOpenedDays([...openedDays, clickedDay]);
      generateModalText(clickedDay);
      canShowGif(clickedDay)
      setModalOpen(true);
    }
  };

  const generateModalText = (clickedDay: number) => {
    switch (true) {
      case clickedDay === 25:
        setModalText("Merry Christmas!");
        break;

      case clickedDay === 24:
        setModalText("Merry Christmas Eve!");
        break;

      case clickedDay < 24:
        setModalText(`${25 - clickedDay} more days till Santa!`);
        break;

      case clickedDay > 25:
        setModalText("Wish you a Happy New Year!");
        break;
    }
  };

  const canShowGif = (clickedDay: number) => {
    const url = gifURLs[clickedDay - 1].images.original.url;
    setGif(url);

    if (today) {
      clickedDay <= today ? setShowGif(true) : setShowGif(false);
    }
  }

  return (
    <>
      <Container>
        <CalenderContainer>
          <MonthHeader>🎄December 2023🎅</MonthHeader>
          <Row>
            <WeekHeader></WeekHeader>
          </Row>
          <Days></Days>
        </CalenderContainer>
      </Container>
      {modalOpen && (
        <Treat
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          gif={gif}
          showGif={showGif}
          modalText={modalText}
        />
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  margin: 16px;
  width: 90%;
`;

const CalenderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 16px;
  width: 100%;
`;

const MonthHeader = styled.div`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
  color: red;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  width: 100%;
`;

const Grid = styled.div`
  border: 1px solid gray;
  height: 100%;
  width: 30%;
  text-align: center;
  line-height: 4;
`;

export default Main;
