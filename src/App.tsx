import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import TeamDisplay from "./components/TeamDisplay";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6")
      .then((res) => setList(res.data.team));
  }, []);

  return (
    <Flex height="100vh" align="center">
      <TeamDisplay list={list} />
    </Flex>
  );
}

export default App;
