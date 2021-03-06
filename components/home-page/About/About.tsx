import { Fragment } from 'react';
import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Link,
  Tag,
  Image,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import NextLink from 'next/link';
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition
} from "../../ui/page-transitions";
import { MotionBox } from "../../ui/motion";
import { companies, institutes } from "../../../data/data";
import Header from "../../layout/header";

interface CardProps {
  title: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
  colorMode: string;
  alt?: string;
  link?: string;
}

const TURQUOISE = "#06b6d4";

const Card = (props: CardProps) => {
  const { title, role, skills, period, logo, colorMode, alt, link } = props;

  return (
    <CardTransition>
      
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: "sm" }}
        bg={useColorModeValue("white", "gray.800")}
        position="relative"
        rounded="md"
      >
     
        <Flex justifyContent="space-between">
          <Flex>
             {/* <NextLink href={link} passHref>
                  <Link isExternal> */}
                  
                  <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={'/assets/images/placeholder.png'}
              src={logo}
              alt={alt}
            />
          
            <Stack spacing={2} pl={3} align="left">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Heading
                align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {role}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                isInline
                flexWrap={'wrap'}
                padding={4}
                alignItems="center"
                display={["none", "none", "flex", "flex"]}
              >
                {skills.map(skill => (
                  <Tag size="sm" padding="0 6px" key={skill} 
             
                 >
                    {skill}
                  </Tag>
                ))}
              </Stack>
            </Stack>

                  {/* </Link>
             </NextLink> */}
          </Flex>
          <Stack display={["none", "none", "flex", "flex"]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>

        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems="center"
          flexWrap={'wrap'}
          display={["flex", "flex", "none", "none"]}
        >
          {skills.map(skill => (
            <Tag size="sm" padding="0 3px" key={skill}>
              {skill}
            </Tag>
          ))}
        </Stack>
        
      </Box>
    </CardTransition>
  );
};

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Fragment>
   
      <PageSlideFade>
        <StaggerChildren>
          <MotionBox>
            <Heading>
              <Flex alignItems="center" padding={5} >
              
                <Stack pl={3}>
                  <Box as={BsFillBriefcaseFill} size="25px" />
                </Stack>
                <Box as={'p'} fontSize={14} paddingLeft={5} paddingRight={5} >
                 Work
               </Box>
              </Flex>
            </Heading>
          </MotionBox>
          <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12} > 
            {companies.map((company, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={company.title}
                  role={company.role}
                  skills={company.skills}
                  period={company.period}
                  logo={company.logo}
                  colorMode={colorMode}
                  link={company.link}
                />
              </MotionBox>
            ))}
          </VStack>
          <Heading>
           
            <Flex alignItems="center" padding={5}>
          
              <Stack pl={3}>
                <Box as={FaGraduationCap} size="25px" />
              </Stack>
              <Box as={'p'} fontSize={14} paddingLeft={5} paddingRight={5} >
               Education
              </Box>
            </Flex>
          </Heading>
          <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
            {institutes.map((institute, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={institute.title}
                  role={institute.role}
                  skills={institute.skills}
                  period={institute.period}
                  logo={institute.logo}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
        </StaggerChildren>
      </PageSlideFade>
    </Fragment>
  );
};


export default About;
