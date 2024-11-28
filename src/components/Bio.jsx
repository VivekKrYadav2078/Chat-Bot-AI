import { useState } from "react";
// import "./App.css" ;
import axios from "axios";
import ReactMarkdown from "react-markdown";
import React from 'react'
// import icon1 from "../icon/icon1.png"
const systemPrompt =`
You are an AI assistant tasked with generating Twitter bios based on user input.

Instructions:

Analyze the User's Inputs:
  - Carefully review the provided tone and bio type.
  - Understand the user's core focus and primary activities.

Generate the Bio:

  - Create a bio that succinctly answers:
    - Who is the user?
    - What does the user do?
    - What can others expect from the user?
  - Reflect the given 'Bio Tone' and 'Bio Type' in the style and language of the bio. Do not explicitly mention the tone or type.

Bio Requirements:

  - Use an informal and approachable tone.
  - Do not include hashtags or any words start with #.
  - Highlight the most important information about the user.
  - Avoid using too many buzzwords or overdoing humor.
  - Ensure the bio length is between 120 and 160 characters.
  - Provide at least four different bio options.
  - If 'Add Emojis' is true, include relevant emojis; if false, you must include any emojis.
  - The response must be in JSON format

Additional Guidelines:
  - Maintain clarity and coherence in each bio.
  - Provide response in JSON format only

Do not include any description, do not include the \`\`\`.
  Code (no \`\`\`):
  `


function Bio() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=API-KEY`,
        method: "post",
        data: {
          contents: [{ parts: [{ text:systemPrompt+ question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
    <div className="bg-blue-950 h-screen p-3 flex flex-col justify-center items-center">
    <form
      onSubmit={generateAnswer}
      className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-lg bg-blue-300 py-6 px-4 transition-all duration-500 transform hover:scale-105"
    >
      <a href="" target="_blank" rel="noopener noreferrer">
        <h1 className="text-4xl font-bold text-blue-950 mb-4 animate-bounce">Generate Bio Using AI</h1>
      </a>
      <textarea
        required
        className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Write About Yourself"
      ></textarea>
      <button
        type="submit"
        className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
          generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={generatingAnswer}
      >
        Generate answer
      </button>
    </form>
    <div className="w-full md:w-3/3 lg:w-2/2 xl:w-3/3 text-center rounded-lg bg-yellow-100 my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
      <ReactMarkdown className="p-4">{answer}</ReactMarkdown>
    </div>
  </div>

    </>
  );
}

export default Bio;
