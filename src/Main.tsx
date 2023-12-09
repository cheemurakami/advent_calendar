import React from "react";
import { styled } from "styled-components";

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
    const firstWeek = [null, null, null, null, null, 1, 2]
    const secondWeek = [3, 4, 5, 6, 7, 8, 9]
    const thirdWeek = [10, 11, 12, 13, 14, 15, 16]
    const fourthWeek = [17, 18, 19, 20, 21, 22, 23]
    const fifthWeek = [24, 25, 26, 27, 28, 29, 30]
    const sixthWeek = [31, null, null, null, null, null, null]

    const allWeeks = [firstWeek, secondWeek, thirdWeek, fourthWeek, fifthWeek, sixthWeek]

    return (
      <>
        {allWeeks.map((weeks) =>
          <Row>
            {weeks.map((day, i) => (
              <Grid key={i}>{day}</Grid>
            ))}
          </Row>
        )}
      </>
    );
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
`

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  width: 100%;`;

const Grid = styled.div`
  border: 1px solid gray;
  height: 100%;
  width: 30%;
  text-align: center;
  line-height: 4;
`;

export default Main;