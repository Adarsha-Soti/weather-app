import { Heading, HStack, Grid, Img, Flex, Text } from "@chakra-ui/react";

const Comp1 = (props) => {
  let temperature = props?.weather?.daily[0]?.temp?.day - 273.15;
  let temperature1 = props?.weather?.daily[1]?.temp?.day - 273.15;
  let temperature2 = props?.weather?.daily[2]?.temp?.day - 273.15;
  let temperature3 = props?.weather?.daily[3]?.temp?.day - 273.15;
  let temperature4 = props?.weather?.daily[4]?.temp?.day - 273.15;
  let temperature5 = props?.weather?.daily[5]?.temp?.day - 273.15;
  let temperature6 = props?.weather?.daily[6]?.temp?.day - 273.15;
  const data = [
    {
      id: 1,
      day: "Mon",
      img: "./assets/cloudy.svg",
      temp: temperature.toFixed(2),
      min: props?.weather?.daily[0]?.temp?.min,
      max: props?.weather?.daily[0]?.temp?.max,
    },
    {
      id: 2,
      day: "Tue",
      img: "./assets/sunny.svg",
      temp: temperature1.toFixed(2),
      min: props?.weather?.daily[1]?.temp?.min,
      max: props?.weather?.daily[1]?.temp?.max,
    },
    {
      id: 3,
      day: "Wed",
      img: "./assets/rainny.svg",
      temp: temperature2.toFixed(2),
      min: props?.weather?.daily[2]?.temp?.min,
      max: props?.weather?.daily[2]?.temp?.max,
    },
    {
      id: 4,
      day: "Thr",
      img: "./assets/cloudy_rainy.svg",
      temp: temperature3.toFixed(2),
      min: props?.weather?.daily[3]?.temp?.min,
      max: props?.weather?.daily[3]?.temp?.max,
    },
    {
      id: 5,
      day: "Fri",
      img: "./assets/sunny.svg",
      temp: temperature4.toFixed(2),
      min: props?.weather?.daily[4]?.temp?.min,
      max: props?.weather?.daily[4]?.temp?.max,
    },
    {
      id: 6,
      day: "Sat",
      img: "./assets/sunny.svg",
      temp: temperature5.toFixed(2),
      min: props?.weather?.daily[5]?.temp?.min,
      max: props?.weather?.daily[5]?.temp?.max,
    },
    {
      id: 7,
      day: "sun",
      img: "./assets/sunny.svg",
      temp: temperature6.toFixed(2),
      min: props?.weather?.daily[6]?.temp?.min,
      max: props?.weather?.daily[6]?.temp?.max,
    },
  ];

  return data.map((item) => {
    return (
      <HStack>
        <Grid
          marginBottom="20px"
          backgroundColor="white"
          placeItems="center"
          p={5}
          boxShadow="2xl "
          borderWidth="1px"
          borderRadius="md"
          minWidth="163px"
          maxWidth="160px"
          height="230px"
          _hover={{ bg: "#4299E1", color: "white" }}
        >
          <Heading fontSize="x-large">{item.day}</Heading>
          <Img src={item.img} width="75%" />
          <Heading mt={4} fontSize="x-large">
            {item.temp}°C
            <br />
            {/* <Text style={{ fontSize: "12px" }}>min:{item.min}°C</Text>
            <Text style={{ fontSize: "12px" }}>max:{item.max}°C</Text> */}
          </Heading>
        </Grid>
      </HStack>
    );
  });
};

export default Comp1;
