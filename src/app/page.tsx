"use client";
import { gql, useMutation } from "@apollo/client";
import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

interface UserRegister {
  name: string;
  email: string;
}

const CREATE_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      name
      email
    }
  }
`;

export default function Home() {
  const { register, handleSubmit } = useForm<UserRegister>();

  const [createUser] = useMutation(CREATE_USER);

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<UserRegister> = async (formData) => {
    try {
      await createUser({
        variables: {
          data: formData,
        },
      });
    } catch (e) {
      console.error("Error creating user:", e);
    }
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="gap-8 row-start-2 items-center sm:items-start w-1/2 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              {...register("name")}
              variant="outlined"
              sx={{ marginTop: 5 }}
              label="name"
              fullWidth
            />
            <TextField
              {...register("email")}
              variant="outlined"
              sx={{ marginTop: 5 }}
              label="email"
              fullWidth
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{
                marginTop: 5,
                width: 12,
                marginX: "auto",
              }}
            >
              送信
            </Button>
          </Box>
        </form>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
