import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const InfoSection: React.FC = () => {
  return (
    <Box>
      <Heading
        as="h2"
        fontSize="1.5rem"
        marginTop="0"
        marginBottom={{ base: "2rem", lg: "4rem" }}
        textColor="navy"
        textAlign={{ base: "center", lg: "start" }}
      >
        Register
      </Heading>
      <Heading
        as="h3"
        fontSize="1.25rem"
        marginBottom={{ base: "1rem", lg: "1.5rem" }}
        textColor="navy"
        textAlign={{ base: "center", lg: "start" }}
      >
        Team player - Be positive - Beat yesterday
      </Heading>
      <Flex justifyContent={{ base: "center", lg: "start" }}>
        <Text fontSize=".875rem" maxWidth="30em" color="blackAlpha.600">
          Together we re-define the experience of online gaming through
          gamification and novel technical solutions.
        </Text>
      </Flex>
    </Box>
  );
};

export default InfoSection;
