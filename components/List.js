import Col from "./Col";
import Row from "./Row";
import Temp from "./Temp";

const List = ({ activeIndex, daysOfWeek, items }) => {
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
            <Row key={index}>
              <Col xs={3} sm={2}>
                {time}
              </Col>
              <Col xs={6} sm={4}>
                <Temp amount={block.main.temp} />
              </Col>
              <Col xs={3} sm={2}>
                Icon goes here
              </Col>
            </Row>
          );
        })}
    </div>
  );
};
export default List;
