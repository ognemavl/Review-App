import { Box, HStack, Heading,Text } from '@chakra-ui/react'

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='4px' {...rest} style={{border: "2px #938fad solid",borderRadius:"15px"}}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }
  
  function StackEx(props) {
    return (
      <HStack spacing={5} className="box">
        <Feature
          className="box"
          title={props.username}
          desc={ props.review }
        />
      </HStack>
    )
  }

  export default StackEx