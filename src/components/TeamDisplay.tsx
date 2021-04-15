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
      height="full"
      paddingX="4rem"
      paddingY="2rem"
      textColor="white"
      className="bg-cogs"
    >
      <Heading as="h1" fontSize="3rem" marginY="0.67em">
        <Flex direction="column">
          <Box as="span">Join</Box> <Box as="span">the</Box>{" "}
          <Box as="span">team</Box>
        </Flex>
      </Heading>
      <UnorderedList fontSize="1rem">
        {list.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default TeamDisplay;
