import { FeatureCardData } from "@interfaces/FeatureCard"

export const featureCards: FeatureCardData[] = [
  {
    source: require("@assets/images/glasses.jpg"),
    text: "Translate texts into more than 30 languages",
  },
  {
    source: require("@assets/images/kindle.jpg"),
    text: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    source: require("@assets/images/class.jpg"),
    text: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    source: require("@assets/images/tablet.jpg"),
    text: "Lorem ipsum, dolor sit amet consectetur",
  },
]

export const FEATURES_CAROUSEL_DEF = {
  CAROUSEL_LENGTH: featureCards.length,
  FADE_ANIMATION_TIME: 400,
}
