import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { ColorModeSwitcher } from "../ui/ColorModeSwitcher";
// import UserIcon from "assets/images/user_icon.png";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import NextLink from "next/link";

const webLinks = [
  {name: "Home", path: "/"},
  { name: "About", path: "#about" },
  // { name: "Work", path: "#work" },

];

const mobileLinks = [
   {name: "Home", path: "/"},
   { name: "About", path: "#about" },
  //  { name: "Work", path: "#work" },
 
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const link = {
    bg: useColorModeValue("white.200", "gray.900"),
    color: useColorModeValue("green.200", "green.900"),
  }
  return (
    <NextLink href={props.path} passHref>
      <Link
        px={2}
        py={1}
        rounded={"md"}
        fontSize={'14px'}
        _hover={{
          textDecoration: "none",
          bg: link.bg,
          color: link.color
        }}
        _activeLink={{
          color: link.color
        }}
        onClick={() => props.onClose()}
        // to={props.path}
      >
        {props.name}
      </Link>
    </NextLink>
  );
};

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Box boxShadow="sm" bg={useColorModeValue("white", "gray.700")} px={4} >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["90%", "85%", "80%"]}
          maxW={800}
          flexDirection={'row-reverse'}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {webLinks.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <IconButton
              as={Link}
              href={"https://github.com/OhmKhur"}
              size={"md"}
              icon={<FaGithub />}
              aria-label={"Github account"}
              bg={useColorModeValue("white", "gray.700")}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.900")
              }}
            />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
           
          >
            <Stack as={"nav"} spacing={4}>
              {mobileLinks.map((link, index) => (
                <NavLink
                  key={index}
                  index={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
