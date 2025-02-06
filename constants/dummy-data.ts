import { Brain, Eye, MessageSquare, Code, Database, ChartBar, Beaker } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  isWide?: boolean;
}

export const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with this AI engineer was transformative for our project. Their expertise in both theoretical and practical aspects of AI is outstanding.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Their competitive programming background really shows in the efficiency of their solutions. Incredible problem-solving skills!",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "The depth of knowledge in computer vision and NLP is remarkable. They delivered beyond our expectations.",
    href: "https://twitter.com/sofiaml"
  }
];


export const expertiseData = [
  {
    title: "Generative AI",
    description: "Specializing in developing cutting-edge AI models for creative content generation. Experience with transformers, GANs, and diffusion models for text, image, and audio generation.",
    icon: Brain,
    skills: ["Large Language Models", "Stable Diffusion", "GANs", "Transformer Architecture"],
    stats: [
      { label: "Projects Completed", value: "25+" },
      { label: "Models Deployed", value: "10+" },
      { label: "Research Papers", value: "5" }
    ]
  },
  {
    title: "Computer Vision",
    description: "Building advanced visual recognition systems using deep learning. Expertise in object detection, image segmentation, and real-time video processing applications.",
    icon: Eye,
    skills: ["Object Detection", "Image Segmentation", "CNN Architecture", "OpenCV"],
    stats: [
      { label: "Accuracy Rate", value: "98%" },
      { label: "Systems Deployed", value: "15+" },
      { label: "Industries Served", value: "5+" }
    ]
  },
  {
    title: "NLP",
    description: "Creating sophisticated language processing solutions using state-of-the-art models. Experience with text classification, sentiment analysis, and language generation.",
    icon: MessageSquare,
    skills: ["BERT/GPT Models", "Text Classification", "Named Entity Recognition", "Sentiment Analysis"],
    stats: [
      { label: "Languages Supported", value: "10+" },
      { label: "Models Trained", value: "20+" },
      { label: "Success Rate", value: "95%" }
    ]
  },
  {
    title: "Competitive Programming",
    description: "Expert problem solver with strong algorithmic skills. Regular participant in coding competitions with proven track record of solving complex computational challenges.",
    icon: Code,
    skills: ["Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory"],
    stats: [
      { label: "Problems Solved", value: "1000+" },
      { label: "Competitions Won", value: "15+" },
      { label: "Global Rank", value: "Top 1%" }
    ]
  },
];

export const projects: Project[] = [
  {
    title: "AI Image Generator",
    description: "A state-of-the-art image generation model using GANs and diffusion models. Capable of creating high-quality, photorealistic images from text descriptions.",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    technologies: ["Python", "PyTorch", "TensorFlow", "React", "Next.js"],
    github: "https://github.com/username/ai-image-generator",
    demo: "https://ai-image-generator.demo.com",
    isWide: true
  },
  {
    title: "NLP Chatbot",
    description: "Advanced conversational AI powered by transformer models, featuring context awareness and natural language understanding.",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1673187456578-63a9ad86cbad?auto=format&fit=crop&q=80",
    technologies: ["Python", "TensorFlow", "BERT", "FastAPI", "React"],
    github: "https://github.com/username/nlp-chatbot",
    demo: "https://nlp-chatbot.demo.com"
  },
  {
    title: "Computer Vision App",
    description: "Real-time object detection and classification system using deep learning, optimized for edge devices.",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80",
    technologies: ["Python", "OpenCV", "TensorFlow", "React Native"],
    github: "https://github.com/username/cv-app",
    demo: "https://cv-app.demo.com"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and TailwindCSS, featuring elegant animations and dark mode.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
    technologies: ["TypeScript", "Next.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio.demo.com",
    isWide: true
  }
];