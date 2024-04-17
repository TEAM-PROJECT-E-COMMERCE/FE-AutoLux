import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Radio, RadioGroup, Select, Stack, Text } from '@chakra-ui/react';
import Icons from './icons';

function FiltersCards() {
  return (
    <>
      <Box border="1px" borderRadius="15px" borderColor="#EDEDED" w="280px" h="500px" boxShadow="lg" mt="30px" ms="30px">
        <Text fontWeight="bold" p="20px" fontSize="23px">
          Filters
        </Text>
        <Icons />
        <Box border="1px" borderColor="#EDEDED" w="250px" ms="15px" mt="-10px" />
        <Box p="20px">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Brand
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Select border="1px" borderColor="#EDEDED" mt="5px" borderRadius="5px">
                  <option value="option1">Mitsubishi</option>
                  <option value="option2">Toyota</option>
                  <option value="option3">Daihatsu</option>
                </Select>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Type
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Select border="1px" borderColor="#EDEDED" mt="5px" borderRadius="5px">
                  <option value="option1">Sedan</option>
                  <option value="option2">sUV</option>
                  <option value="option3">Crossover</option>
                </Select>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Model
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Select border="1px" borderColor="#EDEDED" mt="5px" borderRadius="5px">
                  <option value="option1">Sedan</option>
                  <option value="option2">sUV</option>
                  <option value="option3">Crossover</option>
                </Select>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box border="1px" borderColor="#EDEDED" w="250px" ms="15px" mt="-10px" />
        <Text fontWeight="bold" p="20px" fontSize="23px" mt="-10px">
          Price
        </Text>
        <RadioGroup defaultValue="1">
          <Stack ms='30px'>
            <Radio value="1" colorScheme='red'>Rp. 5.000.000 - Rp. 15.000.000</Radio>
            <Radio value="2" colorScheme='red'>Rp. 5.000.000 - Rp. 15.000.000</Radio>
            <Radio value="3" colorScheme='red'>Rp. 5.000.000 - Rp. 15.000.000</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </>
  );
}

export default FiltersCards;