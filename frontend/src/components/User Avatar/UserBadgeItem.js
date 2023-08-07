import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="orange"
      color="white"
      cursor="pointer"
    >
      {user.name}
      <CloseIcon m="1px" p="1px" onClick={handleFunction} />
    </Box>
  );
};

export default UserBadgeItem;
