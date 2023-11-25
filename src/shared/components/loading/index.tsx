import { Center, LoadingOverlay } from '@mantine/core';

function Loading() {
  return (
    <Center w="100vw" h="100vh">
      <LoadingOverlay
        visible
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
      />
    </Center>
  );
}

export default Loading;
