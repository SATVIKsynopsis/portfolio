import { ArcTimeline, ArcTimelineItem } from "@/components/magicui/arc-timeline";
import {
  RocketIcon,
  CubeIcon,
  LockClosedIcon,
  GlobeIcon,
  GearIcon,
  LightningBoltIcon,
  StarIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";

export function ArcTimelineDemo() {
  return (
    <ArcTimeline
      // className={cn(
      //   "[--step-line-active-color:#888888] dark:[--step-line-active-color:#9780ff]",
      //   "[--step-line-inactive-color:#b1b1b1] dark:[--step-line-inactive-color:#737373]",
      //   "[--placeholder-line-color:#a1a1a1] dark:[--placeholder-line-color:#737373]",
      //   "[--icon-active-color:#555555] dark:[--icon-active-color:#d4d4d4]",
      //   "[--icon-inactive-color:#a3a3a3] dark:[--icon-inactive-color:#a3a3a3]",
      //   "[--time-active-color:#555555] dark:[--time-active-color:#d4d4d4]",
      //   "[--time-inactive-color:#a3a3a3] dark:[--time-inactive-color:#a3a3a3]",
      //   "[--description-color:#555555] dark:[--description-color:#d4d4d4]"
      // )}
      data={TIMELINE}
      defaultActiveStep={{ time: "2025 Q2", stepIndex: 0 }}
      arcConfig={{
        circleWidth: 4500,
        angleBetweenMinorSteps: 0.4,
        lineCountFillBetweenSteps: 8,
        boundaryPlaceholderLinesCount: 50,
      }}
    />
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "2024 - October",
    steps: [
      {
        icon: <RocketIcon width={20} height={20} />,
        content:
          "The start of something big.",
      },
      {
        icon: <CubeIcon width={20} height={20} />,
        content:
          "Small HTML and CSS projects",
      },
    ],  
  },
  {
    time: "2024- December",
    steps: [
      {
        icon: <LockClosedIcon width={20} height={20} />,
        content: "Learned frontend and backend development.",
      },
      {
        icon: <GlobeIcon width={20} height={20} />,
        content:
          "Built small projects in Recat.js and and learned version control on how to push code.",
      },
      {
        icon: <GearIcon width={20} height={20} />,
        content:
          "Built backend with node.js, express.js and MongoDB.",
      },
    ],
  },
  {
    time: "2025 Q1",
    steps: [
      {
        icon: <RocketIcon width={20} height={20} />,
        content:
          "Started working with a new framework - Next.js",
      },
      {
        icon: <GlobeIcon width={20} height={20} />,
        content:
          "Delve into Next.js.",
      },
      {
        icon: <MagicWandIcon width={20} height={20} />,
        content:
          "Made several projects.",
      },
    ],
  },
  {
    time: "2025 Q2",
    steps: [
      {
        icon: <StarIcon width={20} height={20} />,
        content:
          "Participated in hackathons - Adobe India hackathon, Tutedude hackathon and google GenAI hackathon",
      },
      {
        icon: <LightningBoltIcon width={20} height={20} />,
        content: "Introduced blockchain integration for secure transactions.",
      },
      {
        icon: <RocketIcon width={20} height={20} />,
        content:
          "Showcased at CES with revolutionary AI-powered consumer products.",
      },
    ],
  },
  {
    time: "2025 Q2",
    steps: [
      {
        icon: <GearIcon width={20} height={20} />,
        content: "Rebranded company with new logo and visual identity.",
      },
      {
        icon: <StarIcon width={20} height={20} />,
        content:
          "Launched AI-driven content creation tool for marketing teams.",
      },
      {
        icon: <CubeIcon width={20} height={20} />,
        content:
          "Acquired a competitor in the AI space to strengthen market position.",
      },
    ],
  },
  {
    time: "2025 Q3",
    steps: [
      {
        icon: <CubeIcon width={20} height={20} />,
        content: "Launched self-driving AI platform for industrial automation.",
      },
      {
        icon: <MagicWandIcon width={20} height={20} />,
        content: "Added virtual reality integration to the product suite.",
      },
    ],
  },
  {
    time: "2025 Q4",
    steps: [
      {
        icon: <StarIcon width={20} height={20} />,
        content:
          "Introduced AI-driven analytics dashboard for enterprise clients.",
      },
      {
        icon: <LightningBoltIcon width={20} height={20} />,
        content:
          "Launched international expansion into Asian and European markets.",
      },
      {
        icon: <RocketIcon width={20} height={20} />,
        content: "Hosted first global conference showcasing AI innovations.",
      },
    ],
  },
  {
    time: "2026 Q1",
    steps: [
      {
        icon: <GearIcon width={20} height={20} />,
        content:
          "Released API for developers to integrate AI into their applications.",
      },
      {
        icon: <StarIcon width={20} height={20} />,
        content:
          "Launched new AI-powered voice assistant with multi-language support.",
      },
      {
        icon: <GlobeIcon width={20} height={20} />,
        content:
          "Partnered with government agencies for AI-driven policy making.",
      },
    ],
  },
  {
    time: "2026 Q2",
    steps: [
      {
        icon: <GearIcon width={20} height={20} />,
        content: "Unveiled new AI-powered robotics platform for manufacturing.",
      },
      {
        icon: <MagicWandIcon width={20} height={20} />,
        content:
          "Introduced machine learning models for sustainable energy solutions.",
      },
    ],
  },
];
