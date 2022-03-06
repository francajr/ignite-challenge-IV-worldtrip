import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Travels from "../components/Travels";
import Header from "../components/Header";
import Divider from "../components/Divider";
import Body from "../components/Body";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Travels />
      <Divider />
      <Body />
      <Slider />
    </Flex>
  )
}
