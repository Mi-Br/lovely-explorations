import Image from "next/image";
import styles from "./page.module.css";
import {Text, Button, input, TextField, Box} from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <Text type="accent">This is simple text</Text>
      <Button>Hello</Button>
      <Box maxWidth="200px">
        <TextField.Root>
        <TextField.Slot>
          <Button>press</Button>
        </TextField.Slot>
        </TextField.Root>
      </Box>
    </>
  );
}
