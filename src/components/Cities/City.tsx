import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
  return (
    <>
      <Box borderRadius="4px" overflow="hidden">
        <Image src="/images/londres.svg" h="auto" w="100%" />
        <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
          <Flex direction="column">
            <Heading fontSize="xl" fontWeight="500">Londres</Heading>
            <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Reino Unido</Text>
          </Flex>
          <Image src="/images/flagreinounido.svg" />
        </Flex>
      </Box>
      <Box borderRadius="4px" overflow="hidden">
        <Image src="/images/paris.svg" h="auto" w="100%" />
        <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
          <Flex direction="column">
            <Heading fontSize="xl" fontWeight="500">Paris</Heading>
            <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">França</Text>
          </Flex>
          <Image src="/images/flagfranca.svg" />
        </Flex>
      </Box>
      <Box borderRadius="4px" overflow="hidden">
        <Image src="/images/roma.svg" h="auto" w="100%" />
        <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
          <Flex direction="column">
            <Heading fontSize="xl" fontWeight="500">Roma</Heading>
            <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Itália</Text>
          </Flex>
          <Image src="/images/flagitalia.svg" />
        </Flex>
      </Box>
      <Box borderRadius="4px" overflow="hidden">
        <Image src="/images/praga.svg" h="auto" w="100%" />
        <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
          <Flex direction="column">
            <Heading fontSize="xl" fontWeight="500">Praga</Heading>
            <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">República Tcheca</Text>
          </Flex>
          <Image src="/images/flagtcheca.svg" />
        </Flex>
      </Box>
      <Box borderRadius="4px" overflow="hidden">
        <Image src="/images/amsterda.svg" h="auto" w="100%" />
        <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
          <Flex direction="column">
            <Heading fontSize="xl" fontWeight="500">Amsterdã</Heading>
            <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Holanda</Text>
          </Flex>
          <Image src="/images/flagholanda.svg" />
        </Flex>
      </Box>
    </>
  )
}