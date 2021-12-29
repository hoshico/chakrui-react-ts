import { Box, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";


type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose } = props;
    return (
      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent pb={8}>
                <ModalHeader>ユーザー詳細</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value="やす"  isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input value="ほし やす"  isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>MAIL</FormLabel>
                            <Input value="123@gmail.com"  isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input value="090-1111-0000"  isReadOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}) 