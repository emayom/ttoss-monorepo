import { useRef, useState } from "react";

import { Box } from "../../components/Box";
import { Logo } from "../../components/Logo";
import { Link } from "../../components/Link";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { TextField } from "../../components/TextField";
import { Typography } from "../../components/Typography";

export const SignIn = () => {
  const [state, setState] = useState({
    id: "",
    pwd: "",
  });

  const idInputRef = useRef<HTMLInputElement>(null);
  const pwdInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleClick = () => {
    if (!state.id && idInputRef.current) idInputRef.current.focus();
    if (!state.pwd && pwdInputRef.current) pwdInputRef.current.focus();
  };

  return (
    <section>
      <Box>
        <Logo
          position="absolute"
          mx="auto"
          my="0"
          style={{
            top: "32px",
            left: "0",
            right: "0",
            width: "105px",
          }}
        />
        <img width="100%" src="images/paste-image.png" alt="image" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        mx="auto"
        my="0"
        px="0"
        py="500"
        rowGap="400"
        style={{
          width: "311px",
        }}
      >
        <Box display={"grid"} gap="300">
          <Typography component="h4" variant="h4">
            Sign In
          </Typography>
          <Typography component="span" variant="body2">
            Don’t have an accout yet?
            <Link
              href="/signup"
              size="body2"
              accent
              style={{ marginLeft: "8px" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>

        <Box display="grid" gap="400">
          <TextField
            name="id"
            ref={idInputRef}
            onChange={handleChange}
            variant="underline"
            placeholder="Your username or email address"
          ></TextField>
          <TextField
            name="pwd"
            ref={pwdInputRef}
            onChange={handleChange}
            type="password"
            variant="underline"
            placeholder="Password"
          ></TextField>

          <Box display="flex" justifyContent="space-between">
            <Checkbox size="l" label="Remember me"></Checkbox>
            {/* 페이지 작성 필요 */}
            <Link size="caption2" href="" underline="hover">
              Forgot password?
            </Link>
          </Box>
        </Box>
        <Button size="s" onClick={handleClick}>
          Sign Up
        </Button>
      </Box>
    </section>
  );
};
