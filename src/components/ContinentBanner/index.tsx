import { Flex, Heading } from "@chakra-ui/react";

export default function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url(/images/bannereuropa.svg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="flex-end"
      p={["0", "10"]}
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        color="gray.100"
        fontWeight="500"
      >
        Europa
      </Heading>

    </Flex>
  )
}