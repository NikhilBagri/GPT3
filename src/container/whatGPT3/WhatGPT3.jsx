import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="The OpenAI GPT-3 AI chatbot is a sophisticated language processing system that can understand the context of messages, generate coherent answers, translate texts, write code, and more." />
      <Feature title="Capabilities" text="GPT-3 or Generative Pretrained Transformer 3 is an artificial intelligence created by OpenAI. A chat with GPT-3 is a bot that can create text and simulate real talk with a person, translate speech, etc." />
      <Feature title="How does it work" text="One more important thing about the work of the bot – it’s not connected to the Internet. Its base of knowledge was created beforehand using website and book information. The tech was created as a language processing system, so the connection to the World Wide Web isn’t necessary." />
    </div>
  </div>
);

export default WhatGPT3;
