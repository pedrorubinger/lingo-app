import { FeatureCardData } from "@interfaces/FeatureCard"
import { AVAILABLE_LANGUAGES_COUNT } from "@modules/dashboard/utils/const/translatorLanguage"

export const featureCards: FeatureCardData[] = [
  {
    source: require("@assets/images/glasses.jpg"),
    text: `Translate texts into more than ${AVAILABLE_LANGUAGES_COUNT} languages`,
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
