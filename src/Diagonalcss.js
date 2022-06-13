import Comp1 from "./Comp1";
import {
  Stack,
  Center,
  Flex,
  Grid,
  GridItem,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Image,
  SimpleGrid,
  Divider,
  Circle,
  Button,
  Avatar,
  WrapItem,
  Wrap,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Img,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import cloudy from "./img/cloudy.svg";
import rainny from "./img/rainny.svg";
import sunset from "./img/sunset.svg";
import sunrise from "./img/sunrise.svg";
import temperature from "./img/temprature.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export const Diagonalcss = () => {
  const [weather, setWeather] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  let [city, setCity] = useState("kathmandu");
  let onchange = () => {
    let event = document.getElementById("input").value;
    setCity(event);
  };
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=3ef7d993a03c91cce5331683b8c18538`
      )
      .then((response) => {
        setLatitude(response.data[0].lat);
        setLongitude(response.data[0].lon);
      })
      .catch((err) => {
        console.log("error in location api");
      });
  }, [city]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${city}&appid=3ef7d993a03c91cce5331683b8c18538`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => {
        console.log("error in weather api");
      });
  }, [city, latitude, longitude]);
  console.log(weather);
  let tempe = weather?.current?.temp - 273.15;

  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(11, 1fr)"
    >
      <GridItem rowSpan={1} colSpan={3} bg="white">
        <SimpleGrid columns={1}>
          <Box
            height="10vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack spacing={2} w="300px" pt={4}>
              <Center>
                <InputGroup>
                  <InputLeftElement
                    htmlsize="4px"
                    pointerEvents="none"
                    children={<Search2Icon color="gray" />}
                  />
                  <Input
                    id="input"
                    type="text"
                    placeholder="Search Place"
                    _placeholder={{ fontSize: "sm", color: "customGray" }}
                    fontWeight="400"
                    bg="lightGray"
                    border="0"
                    onChange={onchange}
                  />
                </InputGroup>
              </Center>
            </Stack>
          </Box>
          <Box>
            <Center>
              <Image
                boxSize="240px"
                objectFit="contain"
                src={cloudy}
                alt="Cloudy"
              />
            </Center>
            <Text fontSize="5xl" fontWeight="500" color="active" ml={6}>
              {tempe.toFixed(2)}°C
            </Text>
            <Text fontSize="20px" color="customGray" ml={6}>
              <Text as="span" color="customBlue" fontWeight="500">
                Monday,&nbsp;
              </Text>
              5:14
            </Text>
          </Box>
          <Divider orientation="horizontal" mt={4} />
          <Box mt={2}>
            <Flex alignItems="center" ml={6}>
              <Center boxSize="35px" height="30px">
                <Image
                  boxSize="100%"
                  height="100%"
                  objectFit="contain"
                  src={cloudy}
                  alt="Cloudy"
                />
              </Center>
              <Text mt={2} ml={2} color="darkerGray" fontWeight="500">
                Mostly Cloudy
              </Text>
            </Flex>
            <Flex alignItems="center" my={3} ml={6}>
              <Center boxSize="35px" height="30px">
                <Image
                  boxSize="100%"
                  height="100%"
                  objectFit="contain"
                  src={rainny}
                  alt="Cloudy"
                />
              </Center>
              <Text mb={2} ml={2} color="darkerGray" fontWeight="500">
                Rain &nbsp;- 30%
              </Text>
            </Flex>
            <Box
              height="20vh"
              border="2px dashed lightGray"
              mt={7}
              mx={3}
              mr={2}
              py={2}
              pl={3}
              display="flex"
              flexWrap="wrap"
              flexDirection="row"
              alignItems="baseline"
            >
              <Circle
                bg="customPurple"
                color="white"
                width="30px"
                height="30px"
              >
                <Img src="https://w7.pngwing.com/pngs/457/630/png-transparent-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-heart.png" />
              </Circle>
              <Flex w="70%" ml={2} mb={1}>
                <Text
                  as="span"
                  fontSize="27px"
                  fontWeight="500"
                  color="customBlue1"
                >
                  {city}
                </Text>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
      </GridItem>

      <GridItem rowSpan={1} colSpan={8} bg="customGray1">
        <SimpleGrid columns={1}>
          <Flex w="100%" px="6" py="5" align="center" justify="space-between">
            <Flex gap={10}>
              <Text color="gray" fontSize="lg" fontWeight="500">
                Today
              </Text>
              <Text color="active" fontSize="lg" fontWeight="500">
                Week
              </Text>
            </Flex>
            <Flex gap={2}>
              <Circle size="40px" bg="active" color="white">
                <Text>°C</Text>
              </Circle>
              <Circle size="40px" bg="gray.300" color="black.400">
                <Text>°F</Text>
              </Circle>

              <Stack ml={4} minWidth="250px">
                <Menu
                  paddingX={4}
                  paddingY={2}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="1px"
                  _hover={{ bg: "gray.400" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    bg="white"
                  >
                    <Wrap spacing={3}>
                      <WrapItem>
                        <Avatar
                          width="30px"
                          height="90%"
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />
                      </WrapItem>
                      <Center>
                        <Text>Diagonal Tech</Text>
                      </Center>
                    </Wrap>
                  </MenuButton>
                  <MenuList zIndex={10}>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Edit User</MenuItem>
                    <MenuDivider />
                    <MenuItem>Settings</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
          <Box>
            <Flex
              gap="8px"
              overflowX={["scroll"]}
              marginLeft="20px"
              paddingRight="20px"
            >
              <Comp1 weather={weather} />
            </Flex>
          </Box>
        </SimpleGrid>
        <Flex w="100%" px="6" py="5">
          <Text color="gray" fontSize="lg" fontWeight="500">
            Today Highlight
          </Text>
        </Flex>
        <SimpleGrid
          columns={[2, null, 3]}
          spacing="30px"
          minW="100%"
          px="6"
          marginBottom="30px"
        >
          <Flex
            bg="white"
            height="200px"
            boxShadow="2xl"
            borderRadius="md"
            _hover={{ bg: "#FBD38D" }}
          >
            <Box marginLeft="5%">
              <Text
                fontWeight="bold"
                color="blackAlpha.500"
                fontSize="xl"
                marginTop="6%"
              >
                Sunrise and sunset
              </Text>
              <br />
              <Flex>
                <Img boxSize="40px" src={sunrise} />
                <Text
                  marginLeft="3%"
                  fontWeight="bold"
                  color="blackAlpha.600"
                  fontSize="20px"
                >
                  6:30am
                  <Text
                    fontWeight="bold"
                    color="blackAlpha.500"
                    fontSize="15px"
                  >
                    1m 36s
                  </Text>
                </Text>
              </Flex>
              <Flex>
                <Img boxSize="40px" src={sunset} />
                <Text
                  marginLeft="3%"
                  fontWeight="bold"
                  color="blackAlpha.600"
                  fontSize="20px"
                >
                  5:40pm
                  <Text
                    fontWeight="bold"
                    color="blackAlpha.500"
                    fontSize="15px"
                  >
                    2m 36s
                  </Text>
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            bg="white"
            height="200px"
            boxShadow="2xl"
            borderRadius="md"
            justifyContent="space-between"
            _hover={{ bg: "#FBD38D" }}
          >
            <Box marginLeft="5%">
              <Text
                fontWeight="bold"
                color="blackAlpha.500"
                fontSize="xl"
                marginTop="6%"
              >
                Temprature
              </Text>
              <Flex>
                <Text
                  fontWeight="medium"
                  color="blackAlpha.700"
                  fontSize="50px"
                  marginTop="6%"
                >
                  {tempe.toFixed(2)}
                </Text>
                <Text
                  marginTop="25%"
                  color="blackAlpha.500"
                  fontWeight="bold"
                  fontSize="20px"
                >
                  C
                </Text>
              </Flex>
              <Flex>
                <Text
                  fontWeight="bold"
                  color="blackAlpha.500"
                  fontSize="xl"
                  marginTop="6%"
                >
                  {city}
                </Text>
              </Flex>
            </Box>
            <Img marginTop="10%" height="60%" src={temperature} />
          </Flex>
          <Flex
            bg="white"
            height="200px"
            boxShadow="2xl"
            borderRadius="md"
            justifyContent="space-between"
            _hover={{ bg: "#FBD38D" }}
          >
            <Box marginLeft="5%">
              <Text
                fontWeight="bold"
                color="blackAlpha.500"
                fontSize="xl"
                marginTop="6%"
              >
                wind speed
              </Text>
              <Flex>
                <Text
                  fontWeight="medium"
                  color="blackAlpha.700"
                  fontSize="50px"
                  marginTop="6%"
                >
                  {weather?.current?.wind_speed}
                </Text>
                <Text
                  marginTop="25%"
                  color="blackAlpha.500"
                  fontWeight="bold"
                  fontSize="20px"
                >
                  km/hr
                </Text>
              </Flex>
              <Flex>
                <Text
                  fontWeight="bold"
                  color="blackAlpha.500"
                  fontSize="xl"
                  marginTop="6%"
                >
                  Status :
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            bg="white"
            height="200px"
            boxShadow="2xl"
            borderRadius="md"
            justifyContent="space-between"
            _hover={{ bg: "#FBD38D" }}
          >
            <Box marginLeft="5%">
              <Text
                fontWeight="bold"
                color="blackAlpha.500"
                fontSize="xl"
                marginTop="6%"
              >
                Humidity
              </Text>
              <Flex>
                <Text
                  fontWeight="medium"
                  color="blackAlpha.700"
                  fontSize="50px"
                  marginTop="6%"
                >
                  {weather?.current?.humidity}
                </Text>
                <Text
                  marginTop="15%"
                  color="blackAlpha.500"
                  fontWeight="bold"
                  fontSize="35px"
                >
                  %
                </Text>
              </Flex>
              <Flex>
                <Text
                  fontWeight="bold"
                  color="blackAlpha.500"
                  fontSize="xl"
                  marginTop="6%"
                >
                  Status :
                </Text>
                <Text
                  fontWeight="bold"
                  color="#3182CE"
                  fontSize="xl"
                  marginTop="6%"
                >
                  Good Quality
                </Text>
              </Flex>
            </Box>
            <Slider
              aria-label="slider-ex-3"
              defaultValue={30}
              orientation="vertical"
              marginTop="10%"
              height="75%"
              marginRight="20px"
            >
              <SliderTrack width="20px" borderRadius="10">
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
          <Flex
            bg="white"
            height="200px"
            boxShadow="2xl"
            borderRadius="md"
            justifyContent="space-between"
            _hover={{ bg: "#FBD38D" }}
          >
            <Box marginLeft="5%">
              <Text
                fontWeight="bold"
                color="blackAlpha.500"
                fontSize="xl"
                marginTop="6%"
              >
                Visibility
              </Text>
              <Flex>
                <Text
                  fontWeight="medium"
                  color="blackAlpha.700"
                  fontSize="50px"
                  marginTop="6%"
                >
                  {weather?.current?.visibility}
                </Text>
              </Flex>
              <Flex>
                <Text
                  fontWeight="bold"
                  color="blackAlpha.500"
                  fontSize="xl"
                  marginTop="6%"
                >
                  Status :
                </Text>
                <Text
                  fontWeight="bold"
                  color="#ED8936"
                  fontSize="xl"
                  marginTop="6%"
                >
                  Average
                </Text>
              </Flex>
            </Box>
            <Slider
              aria-label="slider-ex-3"
              defaultValue={30}
              orientation="vertical"
              marginTop="10%"
              height="75%"
              marginRight="20px"
            >
              <SliderTrack width="20px" borderRadius="10">
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
          <Flex
            bg="white"
            height="200px"
            boxShadow="2xl"
            borderRadius="md"
            justifyContent="space-between"
            _hover={{ bg: "#FBD38D" }}
          >
            <Box marginLeft="5%">
              <Text
                fontWeight="bold"
                color="blackAlpha.500"
                fontSize="xl"
                marginTop="6%"
              >
                Air Quality
              </Text>
              <Text
                fontWeight="medium"
                color="blackAlpha.700"
                fontSize="50px"
                marginTop="6%"
              >
                120
              </Text>
              <Flex>
                <Text
                  fontWeight="bold"
                  color="blackAlpha.500"
                  fontSize="xl"
                  marginTop="6%"
                >
                  Status :
                </Text>
                <Text
                  fontWeight="bold"
                  color="#C53030"
                  fontSize="xl"
                  marginTop="6%"
                >
                  Bad Quality
                </Text>
              </Flex>
            </Box>
            <Slider
              aria-label="slider-ex-3"
              defaultValue={30}
              orientation="vertical"
              marginTop="10%"
              height="75%"
              marginRight="20px"
            >
              <SliderTrack width="20px" borderRadius="10">
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};
