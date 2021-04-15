import { Box, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import "./TeamDisplay.css";

interface TeamDisplayProps {
  list: string[];
}

export const TeamDisplay: React.FC<TeamDisplayProps> = ({
  list,
}: TeamDisplayProps) => {
  return (
    <Box
      width={{ base: "full", md: "25%" }}
      height="full"
      paddingX={{ lg: "4rem" }}
      paddingY="2rem"
      textColor="white"
      className="bg-cogs"
      overflow={{ lg: "auto" }}
    >
      <Heading
        as="h1"
        fontSize="3rem"
        marginY="0.67em"
        textAlign={{ base: "center", lg: "start" }}
      >
        <Flex direction={{ base: "row", md: "column" }} justifyContent="center">
          <Box>
            <Box as="span">Join</Box> <Box as="span">the</Box>{" "}
            <Box as="span">team</Box>
          </Box>
        </Flex>
      </Heading>
      <UnorderedList fontSize="1rem" width="full" maxWidth="95vw">
        <Flex direction="column" alignItems={{ base: "center", lg: "start" }}>
          <Box>
            {list.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </Box>
        </Flex>
      </UnorderedList>
    </Box>
  );
};

export default TeamDisplay;
