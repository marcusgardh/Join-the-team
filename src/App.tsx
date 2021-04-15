import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import TeamDisplay from "./components/TeamDisplay/TeamDisplay";
import InfoSection from "./components/InfoSection";
import ListForm from "./components/ListForm";

function App() {
  const [list, setList] = useState([""]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6")
      .then((res) => setList(res.data.team));
  }, []);

  function addName(name: string) {
    setList([...list, name]);
  }

  return (
    <Flex height="100vh" align="center">
      <TeamDisplay list={list} />
      <Box paddingLeft="4rem">
        <InfoSection />
        <ListForm sendName={addName} />
      </Box>
    </Flex>
  );
}

export default App;
