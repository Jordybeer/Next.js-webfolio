import React from "react";
import { chakra, Box, Image } from "@chakra-ui/react";
import "@fontsource-variable/raleway";

export default function FrontHead() {
  // const bg = "#4682b4 ";
  const bg = "linear-gradient(180deg, #1A2B3C 100%, #1A2B3C 70%, #1A2B3C 40%)";
  const titleColor = "#FFFFFF";
  const subtitleColor = "#FFD700";
  const textColor = "#FFFFFF";
  const buttonBgColor = "#471DA9E3";
  const buttonHoverBgColor = "#301475E3";
  const buttonTextColor = "#FFFFFF";
  const buttonBorderColor = "#3B5221";
  const buttonHoverBorderColor = "#3B5221";
  const subtitleOpacity = "1";
  const textShadow = "1px 1px 2px rgba(0,0,0,0.5)";

  return (
    <Box
    zIndex={-1}
      pos="relative"
      overflow="hidden"
      bg={bg}
      // mt={10}
      rounded={{ base: "none", sm: "none", md: "3xl", lg: "3xl", xl: "3xl" }}
      display="inline-block"
      shadow="dark-lg"
      transition={"background 0.3s ease"}
      width={{ base: "100vw", sm: "100vw" }}
      maxW={{ base: "100vw", sm: "100vw", md: "xl", lg: "2xl", xl: "3xl" }}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          width={{ base: "100vw", sm: "100vw" }}
          maxW={{ base: "100vw", sm: "100vw", md: "xl", lg: "2xl", xl: "3xl" }}
          zIndex={1}
          bg={bg}
          shadow="dark-lg"
          border="solid 2px transparent"
        >
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt="10"
          >
            {/* image in the middle */}

            <Box
              w="full"
              display={{ base: "block", sm: "md", lg: "block" }}
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              <Box
                as="img"
                opacity={0.4}
                src="https://i.imgur.com/41sjJtw.png"
                alt="RB logo"
                position="absolute"
                overflow="hidden"
                zIndex={-1}
                aspectRatio={1}
                top={{ base: "auto", md: "auto" }}
                left={{ base: "auto", md: "auto" }}
                right={{ base: "auto", md: "auto" }}
                bottom={{ base: "auto", md: "auto" }}
                objectFit="cover"
              />
              <chakra.h1
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                rounded="md"
                color={titleColor}
                _dark={{ color: titleColor }}
                opacity={subtitleOpacity}
                textShadow={textShadow}
                textAlign="center"
              >
                <chakra.span
                  fontSize={{ base: "5xl", sm: "5xl", lg: "6xl" }}
                  fontFamily="Raleway Variable"
                  display={{ base: "block", sm: "md", lg: "block" }}
                >
                  Waar dromen
                </chakra.span>
                <chakra.span
                  fontFamily={"Raleway Variable"}
                  fontSize={{ base: "5xl", sm: "5xl", lg: "6xl" }}
                  color={subtitleColor}
                  opacity={subtitleOpacity}
                  textShadow={textShadow}
                >
                  vorm krijgen
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "2xl", md: "2xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color={textColor}
                textAlign="left"
                rounded="md"
                backdropFilter="blur(0.5px)"
                shadow="dark-lg"
                style={{ padding: "1rem" }}
              >
                Stap binnen in mijn wereld van solide vakmanschap, waar hout en
                staal samenkomen om unieke meubelstukken te creëren. Van jouw
                ideeën tot tastbare kunstwerken, elke creatie vertelt een
                verhaal van ambacht en passie. Ontdek de harmonie van materialen
                en de kracht van individualiteit bij RB Lasprojecten.
              </chakra.p>
              <Box
                mt={{ base: 5, sm: 8 }}
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={{ sm: "center", md: "flex-start" }}
                alignItems={{ sm: "center", md: "flex-start" }}
                fontWeight="extrabold"
                fontFamily="Raleway Variable"
              >
                <Box
                  rounded="full"
                  shadow="drop"
                  mr={{ base: 0, md: 3 }}
                  mb={{ base: 3, md: 0 }}
                >
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color={buttonTextColor}
                    bg={buttonBgColor}
                    _hover={{ buttonHoverBgColor }}
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    cursor="pointer"
                  >
                    Projecten
                  </chakra.a>
                </Box>
                <Box>
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    border={buttonBorderColor}
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="c7cdfc"
                    bg="#535C91E3"
                    _hover={{ bg: "#313557E3" }}
                    cursor="pointer"
                  >
                    Contacteer ons
                  </chakra.a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}