import {
  Flex,
  Avatar,
  Box,

} from "@chakra-ui/react";
import Image from 'next/image';
import { MotionBox, MotionFlex } from "../ui/motion";
import Header from "../layout/header";
import Projects from "./projects";
import NextLink from 'next/link'
import About from "./About";
import Skills from "./Skills";
// import UserIcon from "assets/images/user_icon.png";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

interface HomeProps {
  projects: project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {

  return (
    <Flex direction="column" align="center">
      <style jsx>
        {`
         .avatar {
           width: 150px;
           height: 150px;
           border: 1px solid red;
          border-radius: 50%;
         }
        `}
      </style>
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar
            size={"2xl"}
            // placeholder={'efafae'}
            src={"https://avatars.githubusercontent.com/u/39696253?v=4"}
          />
          {/* <div style={{
            borderRadius: "50%",
            width: '150px',
            height: '150px'
          }}>
          <Image
            placeholder="blur"
            width={150}
          
            height={150}
            className="avatar"
            alt="Sai Ohm Khay"
            src={"https://avatars.githubusercontent.com/u/39696253?v=4" as any}
          />
           </div> */}
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
        
          <Header emoji="👋 Hey! " mt={0} >
          
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{" "}
            <Box as="strong" fontWeight="600">
              Sai Ohm Khay
            </Box>{" "}
            and I&apos;m a{" "}
            <Box as="span" whiteSpace="nowrap">
              Full Stack Developer from Myamar.
            </Box>
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Box mt={10}>
          <Skills />
         </Box>
        <Box mt={10} id={"about"}>
          <About />
        </Box>
        {/* <Box mt={10} id={"work"}>
        
          <Projects projects={projects} />
        </Box> */}

      </MotionBox>
    </Flex>
  );
};

export default Home;
