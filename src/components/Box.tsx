import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Text,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    InputRightElement,
    SliderFilledTrack,
    Slider,
    SliderTrack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    SliderThumb,
    useDisclosure,
    ChakraProvider,
  } from '@chakra-ui/react';

  import ConnectButton from './ConnectButton';
  
  import { useEthers, useEtherBalance } from "@usedapp/core";

  import { CgArrowLongRightL } from 'react-icons/cg';

  import { GrSend } from 'react-icons/gr';
  import React, { useState } from 'react';
  import ModalBtn from './ModalBtn';
  
import AccountModal from './AccountModal';
  export default function Box(): JSX.Element {

    const { account, deactivate } = useEthers();
    const Aconta = account && `${account.slice(0, 6)}...${account.slice(account.length - 4,account.length)}`;
    const [value, setValue] = React.useState(0)
    const handleChange = (value:any) => setValue(value)
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        justify={'center'}
        align={'center'}
        >
          
        <Stack
          spacing={7}
          maxW={'xl'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}>

            <Flex>
            

            </Flex>

          <Heading lineHeight={1.5} fontSize={{ base: '2xl', md: '3xl' }}>

            <Flex alignItems={'center'} justifyContent={'center'} justify={'center'}>
              <GrSend/><Text mx='10px'> Envie crypto</Text>
              <ConnectButton handleOpenModal={onOpen} />
              <AccountModal isOpen={isOpen} onClose={onClose} />
              
            </Flex>
           
          </Heading>
          <FormControl id="address">
              <Flex alignItems={'center'}  justifyContent={'center'} justify={'center'} >
            <FormLabel maxW={'xl'} w={'15vw'}>Sua carteira:</FormLabel>
            <InputGroup maxW={'sm'} w={'150vw'}>

                <Input type='text' placeholder={account || "Conect-se para usar"} disabled _placeholder={{ color: 'gray.500' }} />
            </InputGroup>
            </Flex>
          </FormControl>
          <FormControl id="address">
          <Flex alignItems={'center'} justifyContent={'center'} justify={'center'} >
            <FormLabel maxW={'xl'} w={'15vw'}>Destinatário:</FormLabel>
            <InputGroup maxW={'sm'} w={'150vw'} md>
                <InputLeftAddon children='0x123' />
                <Input type='text' placeholder={'Coloque aqui o endereço'} />
            </InputGroup>
            </Flex>
          </FormControl>
          <FormControl id="values">
              <Flex w='full'>
              <ModalBtn /> 
                <Flex mx='5' alignItems={'center'}justifyContent={'center'} justify={'center'} > <CgArrowLongRightL /> </Flex>
                  <Flex bg='white'>
                    <NumberInput precision={2} step={0.2} maxW='100px'  mr='2rem' value={value} onChange={handleChange}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Slider precision={2} step={0.2}
                    
                      w='205px'
                      focusThumbOnChange={false}
                      value={value}
                      onChange={handleChange}
                    >
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb fontSize='11px' boxSize='32px' children={value} />
                    </Slider>
                  </Flex> 
            </Flex>
          </FormControl>
          <Stack spacing={6}>
          <Button leftIcon={<GrSend color='white' />} colorScheme='pink' variant='solid'>Enviar</Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }