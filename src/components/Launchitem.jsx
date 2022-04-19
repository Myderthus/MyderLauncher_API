import { Box, Flex, Text, Spacer, Tag, Button, Icon } from '@chakra-ui/react';
import { HiCalendar } from 'react-icons/hi';

export function LaunchItem(launch) {
    return (
        <Box 
            bg="gray.100" 
            p={4} 
            m={4} 
            borderRadius="lg"
          >
            <Flex>
              <Text 
              fontSize="2x1"
              >
                Mission <strong>{launch.mission_name}</strong> (
                  {launch.launch_year})
              </Text>
              <Spacer />
              <Tag 
              p={2} 
              colorScheme={launch.launch_success ? "green" : "red"}
              >
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>

            <Flex 
            align="center"
            >
              <Icon 
              as={HiCalendar} 
              color="gray.500"
              />{" "}
              <Text 
              fontSize="sm"
              color="gray.500"
              ml={1}
              >
                  {launch.launch_date_local.split("T")[0]}
              </Text>
            </Flex>

            <Button 
            mt={2}
            colorScheme="purple"
            >
                More Details
            </Button>

          </Box>
    )
}