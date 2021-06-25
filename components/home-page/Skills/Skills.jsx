import * as React from "react";
import { useState } from "react";
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid
} from "@chakra-ui/react";
import Section from "../../skills/section";
import { DiCss3, DiAtom, DiCode, DiDocker } from "react-icons/di";
import { BiDesktop } from "react-icons/bi";
import { GiSpiderWeb } from "react-icons/gi";
import SkillCard from "../../skills/skill-card";
import { skillsArray } from "../../../data/data";
import Header from "../../layout/header";
import { MotionBox } from "../../ui/motion";
import { container, PageSlideFade } from "../../ui/page-transitions";


const MySkills = () => {
  const [skillsList, setSkillsList] = useState([]);

  React.useEffect(() => {
    setSkillsList(skillsArray);
  }, []);

  const filterSkills = tab => {
  
    if (tab.length) setSkillsList(skillsArray.filter(skill => skill.type === tab));
    else setSkillsList(skillsArray);

  };

  return (
    <React.Fragment>
    
      <PageSlideFade>
        <VStack spacing={8}>
          <Section>
            <VStack>
              <Header mt={0} mb={1}>
                Tech Stack
            </Header>
              <Text
                fontSize={"xl"}
                color={useColorModeValue("gray.500", "gray.200")}
                maxW="lg"
                textAlign="center"
              >
                A list of my favorite web development tools and technologies.
            </Text>
            </VStack>
          </Section>
          <Section>
            <Tabs
              variant="soft-rounded"
              colorScheme="blue"
              align="center"
              w="100%"
            >
              <TabList display="flex" flexWrap="wrap">
                <Tab
                  bg={useColorModeValue("gray.100", "gray.800")}
                  color={useColorModeValue("gray.600", "gray.500")}
                  _selected={{
                    color: "green.800",
                    bg: "green.100"
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills("")}
                >
                  <HStack spacing={1}>
                    <Icon as={DiCode} />
                    <Text>All</Text>
                  </HStack>
                </Tab>
                <Tab
                  bg={useColorModeValue("gray.100", "gray.800")}
                  color={useColorModeValue("gray.500", "gray.500")}
                  _selected={{
                    color: useColorModeValue("gray.100", "gray.800"),
                    bg: useColorModeValue("gray.900", "gray.100")
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills("development")}
                >
                  <HStack spacing={1}>
                    <Icon as={DiAtom} />
                    <Text>Web Development</Text>
                  </HStack>
                </Tab>
                <Tab
                  bg={useColorModeValue("gray.100", "gray.800")}
                  color={useColorModeValue("gray.600", "gray.500")}
                  _selected={{
                    color: "green.800",
                    bg: "green.100"
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills("design")}
                >
                  <HStack spacing={1}>
                    <Icon as={DiCss3} />
                    <Text>Web Design</Text>
                  </HStack>
                </Tab>
                <Tab
                  bg={useColorModeValue("gray.100", "gray.800")}
                  color={useColorModeValue("gray.600", "gray.500")}
                  _selected={{
                    color: "red.800",
                    bg: "red.100"
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills("devops")}
                >
                  <HStack spacing={1}>
                    <Icon as={DiDocker} />
                    <Text>Devops</Text>
                  </HStack>
                </Tab>
              </TabList>
              <TabPanels minHeight={"45vh"}>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // platform={"web"}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
        </VStack>
      </PageSlideFade>
    </React.Fragment>
  );
};


// export function getStaticProps() {
//   return {
//     props: {
//       skills: skillsArray
//     },
//   };
// }

export default MySkills;
