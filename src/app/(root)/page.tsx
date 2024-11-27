import { PlaceholdersAndVanishInput } from '@/components/acernity/VanishingInput';
import React from 'react'

export default function page() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  return (
    <div className='h-[50rem] flex justify-center items-center'>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
      />
    </div>
  )
}
