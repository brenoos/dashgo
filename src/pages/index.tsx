import { Button, Flex, FormLabel, Stack, FormControl } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/Form/Input";

import type { NextPage } from "next";

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input type="email" label="E-mail" {...register("email")} />

          <Input type="password" label="Password" {...register("password")} />

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Login
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SignIn;
