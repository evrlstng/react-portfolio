import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Jake Baker, All Rights Reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website</span> built with
        React & Next.js, Typescript, Tailwind CSS, Framer Motion and deployed
        with Vercel.
      </p>
    </footer>
  );
}
