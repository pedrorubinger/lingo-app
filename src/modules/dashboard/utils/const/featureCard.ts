import { FeatureCardData } from "@interfaces/FeatureCard"
import { TranslatorDefinitions } from "@modules/dashboard/utils/const/translator"

export const featureCards: FeatureCardData[] = [
  {
    source: require("@assets/images/glasses.jpg"),
    text: `Translate texts into ${TranslatorDefinitions.AVAILABLE_LANGUAGES_COUNT} languages`,
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

export const CarouselFeaturesDefinitions = {
  CAROUSEL_LENGTH: featureCards.length,
  FADE_ANIMATION_TIME: 400,
}
