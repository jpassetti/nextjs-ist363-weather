import Col from "./Col";
import Image from "next/image";
import Row from "./Row";
import Temp from "./Temp";

const List = ({ activeIndex, daysOfWeek, items, unit }) => {
  return (
    <div>
      {items
        .filter((block) => {
          const date = new Date(block.dt * 1000);
          const options = { weekday: "short" };
          const day = date.toLocaleDateString("en-US", options);
          return day === daysOfWeek[activeIndex];
        })
        .map((block, index) => {
          const date = new Date(block.dt * 1000);
          const options = {
            hour: "numeric",
            minute: "numeric",
          };
          const time = date.toLocaleString("en-US", options);
          return (
            <Row key={index} borderBottom={1} paddingTop={1} paddingBottom={1}>
              <Col xs={3} sm={2}>
                {time}
              </Col>
              <Col xs={6} sm={4}>
                <Temp amount={block.main.temp} unit={unit} />
                <p>{block.weather[0].description}</p>
              </Col>
              <Col xs={3} sm={2}>
                <Image
                  src={`https://openweathermap.org/img/wn/${block.weather[0].icon}.png`}
                  alt={`Weather icon for ${block.weather[0].description}`}
                  width={70}
                  height={70}
                />
              </Col>
            </Row>
          );
        })}
    </div>
  );
};
export default List;
