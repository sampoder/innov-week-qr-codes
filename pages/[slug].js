import React from "react";
import {
  Box,
  Grid,
  Heading,
  Flex,
  Badge,
  Link,
  Text,
  Button,
  useToast,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";
import Twemoji from "react-twemoji";
import Events from "../config";
import Head from "../components/meta";
import Div100vh from "react-div-100vh";
const GeoPattern = require("geopattern");
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";

export default function Main(props, context) {
  let bg = GeoPattern.generate(props.data.Slug);
  if (props.data.Type == "Selfie") {
    return (
      <Box
        maxWidth="100vw"
        color="white"
        background={`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),
                    url('https://workshops.hackclub.com/api/patterns/sam')`}
      >
        <Div100vh>
          <Box maxWidth="700px" margin="auto">
            <Box p="3em" pb="1em">
              <Heading fontSize="30px" textAlign="center">
                <span
                  style={{
                    background: "white",
                    borderRadius: "9999px",
                    padding: "10px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    height: "56px",
                    width: "56px",
                  }}
                >
                  🤳
                </span>
              </Heading>
              <Heading
                fontSize={["12vw", "8vw", "4vw"]}
                pt={8}
                textAlign="center"
              >
                Take a Selfie
              </Heading>
            </Box>
            <Box bg="white" color="black" m={3} p={3} borderRadius={5}>
              <Text>
                Congratulations, you scanned a QR code to a{" "}
                {props.data["Filter Desc."]} Jerry the Jaguar selfie filter!
                Take a selfie or wefie to possibly earn extra points for your
                house!
              </Text>
              <br />
              <Text>
                Post it with the hashtag: <Badge>#innovationweek</Badge> and a
                coloured dot representing your house colour.
              </Text>
            </Box>
            <Box m={3} p={0}>
              <Button
                bg="#000"
                bgGradient="linear(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
                width="100%"
                _hover={{ bg: "#000" }}
                _focus={{ bg: "#000" }}
                _active={{ bg: "#000" }}
                as="a"
                href={props.data["Filter Link"]}
              >
                Launch Instagram
              </Button>
            </Box>
          </Box>
        </Div100vh>
      </Box>
    );
  }
  if (props.data.Type == "Quiz") {
    let [correct, setCorrect] = useState(0);
    let [points, setPoints] = useState(0);
    let [pointssent, setPointsSent] = useState(0);
    function answer(no) {
      if (no == props.data["Quiz: Correct Answer"]) {
        setCorrect(1);
        setPoints(5);
      } else {
        setCorrect(2);
        setPoints(2);
      }
    }
    const sendPoints = async (house) => {
      await fetch(`/api/sendpoints?house=${house}&points=${points}`);
      setPointsSent(1);
      setCookie(context, `${props.data["Slug"]}`, "true", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    };

    return (
      <Box
        maxWidth={["100vw", "100vw", "100vw"]}
        color="white"
        background={`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), ${bg
          .toDataUrl()
          .replace('"', "")
          .replace('")', "")})`}
      >
        <Div100vh>
          <Box maxWidth="700px" margin="auto">
            <Box p="3em" pb="1em">
              <Heading fontSize="30px" textAlign="center">
                <span
                  style={{
                    background: "white",
                    borderRadius: "9999px",
                    padding: "10px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    height: "56px",
                    width: "56px",
                  }}
                >
                  ⁉️
                </span>
              </Heading>
              <Heading
                fontSize={["12vw", "8vw", "4vw"]}
                pt={8}
                textAlign="center"
              >
                Quiz Time!
              </Heading>
            </Box>
            <Box
              bg="white"
              color="black"
              fontWeight="600"
              m={3}
              p={3}
              borderRadius={5}
            >
              <Text>
                {correct == 0
                  ? props.data["Quiz: Question"]
                  : correct == 1
                  ? `${pointssent == 0 ? "Congrats! That is correct." : ""} ${
                      props.cookiedetected == false
                        ? pointssent == 0
                          ? "We'd love to send you 5 house points as a prize for your victory, please let us know your house."
                          : "Awesome! Just sent over those House Points! Can't wait to see you again soon :)"
                        : ""
                    }`
                  : pointssent == 0
                  ? `Sadly, that is incorrect. ${
                      props.cookiedetected == false
                        ? "We'd still like to send you 2 house points as a consolation, please let us know your house."
                        : ""
                    } The correct answer was: ${
                      props.data[
                        `Quiz: Answer ${props.data["Quiz: Correct Answer"]}`
                      ]
                    }`
                  : "Awesome! Just sent over those House Points! Can't wait to see you again soon :)"}
              </Text>
            </Box>
            {pointssent == 0 ? (
              correct == 0 ? (
                <>
                  <Box m={3} p={0}>
                    <Button
                      bg={bg.color}
                      width="100%"
                      _hover={{ bg: "#000" }}
                      _focus={{ bg: "#000" }}
                      _active={{ bg: "#000" }}
                      onClick={() => answer("1")}
                    >
                      {props.data["Quiz: Answer 1"]}
                    </Button>
                  </Box>
                  <Box m={3} p={0}>
                    <Button
                      bg={bg.color}
                      width="100%"
                      _hover={{ bg: "#000" }}
                      _focus={{ bg: "#000" }}
                      _active={{ bg: "#000" }}
                      onClick={() => answer("2")}
                    >
                      {props.data["Quiz: Answer 2"]}
                    </Button>
                  </Box>
                  <Box m={3} p={0}>
                    <Button
                      bg={bg.color}
                      width="100%"
                      _hover={{ bg: "#000" }}
                      _focus={{ bg: "#000" }}
                      _active={{ bg: "#000" }}
                      onClick={() => answer("3")}
                    >
                      {props.data["Quiz: Answer 3"]}
                    </Button>
                  </Box>
                  <Box m={3} p={0}>
                    <Button
                      bg={bg.color}
                      width="100%"
                      _hover={{ bg: "#000" }}
                      _focus={{ bg: "#000" }}
                      _active={{ bg: "#000" }}
                      onClick={() => answer("4")}
                    >
                      {props.data["Quiz: Answer 4"]}
                    </Button>
                  </Box>
                </>
              ) : (
                <Box display={props.cookiedetected == false ? "block" : "none"}>
                  <Box m={3} p={0}>
                    <Button
                      bg={bg.color}
                      width="100%"
                      _hover={{ bg: "#000" }}
                      _focus={{ bg: "#000" }}
                      _active={{ bg: "#000" }}
                      onClick={() => sendPoints("green")}
                    >
                      Green House
                    </Button>
                  </Box>
                  <Box m={3} p={0}>
                    <Button
                      bg={bg.color}
                      width="100%"
                      _hover={{ bg: "#000" }}
                      _focus={{ bg: "#000" }}
                      _active={{ bg: "#000" }}
                      onClick={() => sendPoints("blue")}
                    >
                      Blue House
                    </Button>
                  </Box>
                  <Box m={3} p={0}>
                    <Button
                      bg={bg.color}
                      width="100%"
                      _hover={{ bg: "#000" }}
                      _focus={{ bg: "#000" }}
                      _active={{ bg: "#000" }}
                      onClick={() => sendPoints("red")}
                    >
                      Red House
                    </Button>
                  </Box>
                  <Box m={3} p={0}>
                    <Button
                      bg={bg.color}
                      width="100%"
                      _hover={{ bg: "#000" }}
                      _focus={{ bg: "#000" }}
                      _active={{ bg: "#000" }}
                      onClick={() => sendPoints("yellow")}
                    >
                      Yellow House
                    </Button>
                  </Box>
                </Box>
              )
            ) : (
              ""
            )}
          </Box>
        </Div100vh>
      </Box>
    );
  }
  if (props.data.Type == "Meme") {
    const toast = useToast();
    return (
      <Box
        maxWidth="100vw"
        color="white"
        background={`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), ${bg
          .toDataUrl()
          .replace('"', "")
          .replace('")', "")})`}
      >
        <Div100vh>
          <Box maxWidth="600px" margin="auto">
            <Box p="3em" pb="1em">
              <Heading fontSize="30px" textAlign="center">
                <span
                  style={{
                    background: "white",
                    borderRadius: "9999px",
                    padding: "10px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    height: "56px",
                    width: "56px",
                  }}
                >
                  🤣
                </span>
              </Heading>
              <Heading
                fontSize={["12vw", "8vw", "4vw"]}
                pt={8}
                textAlign="center"
              >
                Meme time!
              </Heading>
            </Box>
            <Box
              bg="white"
              color="black"
              fontWeight="600"
              m={3}
              p={2}
              borderRadius={5}
            >
              <Image borderRadius={5} src={props.data["Meme Image"][0].url} />
            </Box>
            <Box m={3} p={0}>
              <CopyToClipboard
                text={`memes.innovweek.co/${props.data.Slug}`}
                onCopy={() =>
                  toast({
                    title: "Copied!",
                    status: "success",
                    duration: 1000,
                  })
                }
              >
                <Button
                  bg={bg.color}
                  width="100%"
                  _hover={{ bg: "#000" }}
                  _focus={{ bg: "#000" }}
                  _active={{ bg: "#000" }}
                >
                  Copy Link
                </Button>
              </CopyToClipboard>
            </Box>
          </Box>
        </Div100vh>
      </Box>
    );
  }
}

export async function getStaticPaths() {
  const AirtablePlus = require("airtable-plus");
  const airtable = new AirtablePlus({
    baseID: "appCsa76vWjxslcuB",
    apiKey: process.env.AIRTABLE,
    tableName: "Table 1",
  });

  let data = await airtable.read({});

  data = data.map(({ id, fields }) => ({
    params: { slug: id }
  }))
  console.log(data)
  return {
    paths: data,
    fallback: true,
  };
}

export async function getStaticProps({ params }, context) {
  const AirtablePlus = require("airtable-plus");

  const cookies = parseCookies(context);

  let cookiedetected = false;

  if (cookies[params.slug]) {
    cookiedetected = true;
  }

  const airtable = new AirtablePlus({
    baseID: "appCsa76vWjxslcuB",
    apiKey: process.env.AIRTABLE,
    tableName: "Table 1",
  });

  const data = await airtable.read({
    filterByFormula: `Slug = "${params.slug}"`,
    maxRecords: 1,
  });

  // console.log(data);

  return { props: { data: data[0].fields, cookiedetected }, revalidate: 60 };
}
