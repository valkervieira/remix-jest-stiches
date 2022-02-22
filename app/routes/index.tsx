import { styled } from "~/stiches.config";

const Box = styled("div", {
  backgroundColor: "#f0f0f0",
});

export default function Index() {
  return (
    <Box>
      <h1>Welcome to Remix</h1>
    </Box>
  );
}
