import DestinationCard from "../components/DestinationCard";

const DestinationCardStory = {
  component: DestinationCard,
  title: "DestinationCard",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    cityId: 1,
    city: "Ramallah",
    country: "Palestine",
    description:
      "Explore the vibrant city of Ramallah, known for its rich history and cultural diversity. Discover historical landmarks, bustling markets, and enjoy the warmth of Palestinian hospitality.",
    imgUrl:
      "https://www.irishtimes.com/resizer/zKAUput0v-pdbzu3keSyhWThHJY=/1600x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/N4P6EWEXC55QQBJJ5Q43X66BPU.jpg",
  },
};

export default DestinationCardStory;
