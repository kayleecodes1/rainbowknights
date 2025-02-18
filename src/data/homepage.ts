import communitySvg from "@/assets/community.svg";
import confettiSvg from "@/assets/confetti.svg";
import handsCommunitySvg from "@/assets/hands-community.svg";
import handsConnectionSvg from "@/assets/hands-connection.svg";
import handsSupportSvg from "@/assets/hands-support.svg";
import pride1Jpg from "@/assets/photos/pride-1.jpg";
import pride2Jpg from "@/assets/photos/pride-2.jpg";
import pride3Jpg from "@/assets/photos/pride-3.jpg";
import plantSvg from "@/assets/plant.svg";
import rainbowSvg from "@/assets/rainbow.svg";

const homepage = {
  hero: {
    title: "Building Community",
    description:
      "Connecting, nurturing, and supporting all LGBTQIA+ people in the Stoughton, Massachusetts area.",
    photos: [pride1Jpg, pride2Jpg, pride3Jpg],
  },
  about: {
    description:
      "Founded in 2024, the Rainbow Knights are a registered 501c3 nonprofit organization whose mission is to connect, nurture, and support all LGBTQIA+ people in the Stoughton, Massachusetts area.",
    items: [
      {
        image: handsConnectionSvg,
        title: "Connection",
        description:
          "Creating supportive, affirming, and inclusive local opportunities and spaces for queer people to connect.",
      },
      {
        image: handsSupportSvg,
        title: "Support",
        description:
          "Offering support and resources tailored to the needs of the suburban queer community.",
      },
      {
        image: handsCommunitySvg,
        title: "Community",
        description:
          "Increasing visibility, political representation, and community strength.",
      },
    ],
    quote:
      "We envision a future where the Stoughton area is home to a vibrant, visible, and diverse queer community that is supported by and supportive of each other and their communities.",
  },
  values: {
    title: "Our Values",
    items: [
      {
        image: rainbowSvg,
        title: "Pride",
        description:
          "We shine a spotlight on the skills and strengths of the Queer community in and from the Stoughton area, helping bring out those abilities to the benefit of all.",
      },
      {
        image: communitySvg,
        title: "Belonging",
        description:
          "We connect Stoughton-area Queer folks to each other and to the larger local community. We work to build lasting relationships and combat isolation.",
      },
      {
        image: confettiSvg,
        title: "Fun",
        description:
          "We approach our events, our identities, and our neighbors with a genuine desire to look for the joy in everything we do.",
      },
      {
        image: plantSvg,
        title: "Growth",
        description:
          "We embrace change and believe that we learn best from each other and our different lived experiences and unique identities. We grow and change with the needs of our community.",
      },
    ],
  },
};

export default homepage;
