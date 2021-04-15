import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const InfoSection: React.FC = () => {
  return (
    <Box>
      <Heading
        as="h2"
        fontSize="1.5rem"
        marginTop="0"
        marginBottom="4rem"
        textColor="navy"
      >
        Register
      </Heading>
      <Heading as="h3" fontSize="1.25rem" textColor="navy">
        Team player - Be positive - Beat yesterday
      </Heading>
      <Text fontSize=".875rem" maxWidth="30em" color="blackAlpha.600">
        Together we re-define the experience of online gaming through
        gamification and novel technical solutions.
      </Text>
    </Box>
  );
};

export default InfoSection;