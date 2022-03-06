import { Grid, GridItem } from "@chakra-ui/react";
import Categoria from "./Travel";

export default function Travels() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      justifyItems="center"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Categoria icon="cocktail 1" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Categoria icon="surf 1" text="praia" />
      </GridItem>
      <GridItem>
        <Categoria icon="building 1" text="moderno" />
      </GridItem>
      <GridItem>
        <Categoria icon="museum 1" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Categoria icon="earth 1" text="e mais..." />
      </GridItem>
    </Grid>
  )
}