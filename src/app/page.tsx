"use client";
import { ThemeProvider, Button } from "@material-tailwind/react";
export default function Home() {
  return (
    <main>
      <h1>home</h1>
      <Button
        type="button"
        color="black"
        placeholder={"Button"}
        children={<span className="text-white">Submit</span>}
        onPointerEnterCapture={null}
        onPointerLeaveCapture={null}
      ></Button>
    </main>
  );
}
