import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const featuresData =[
  {
    title: 'Greater Steerability',
    text:'OpenAI also claims that GPT-4 has a high degree of steerability. It has also made it harder for the AI to break character, meaning its less likely to fail when implemented in an app to play a certain character.'
  },
  {
    title: 'Safety',
    text:'OpenAI spent six months making GPT-4 safer and more aligned. The company claims that its 82% less likely to respond to requests for inappropriate or otherwise disallowed content, 29% more likely to respond in accordance with OpenAIs policies .'
  },
  {
    title: 'Performance Improvements',
    text:'Outside of evaluating the models performance on human exams, OpenAI also evaluated the bot on traditional benchmarks designed for machine learning models.It claims that GPT-4 "considerably outperforms" existing LLMs and "most state-of-the-art models.'
  },
  {
    title: 'Multimodal Capabilities',
    text:'The previous version of ChatGPT was limited to just text prompts. In contrast, one of GPT-4s newest features is its multimodal capabilities.The model can accept both text and image prompts.'
  }
  
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The future is now and you just need to realize it. Step into future today and MAKE IT HAPPEN.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt__features-container">
    {featuresData.map((item, index)=> (
      <Feature title={item.title} text={item.text} key={item.title + index}/>
    ))}
      </div>
    </div>
  );
};

export default Features;
