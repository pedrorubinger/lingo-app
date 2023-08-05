import { DashboardStackScreenProps } from "@interfaces/index"
import { ScreenBox, Typography } from "@components/index"
import { serviceCards, divideArrayIntoChunks } from "@modules/dashboard/utils"
import { HomeHeader, ServiceCard } from "@modules/dashboard/components"
import {
  Body,
  CardsBox,
  CardsTitleBox,
  CarouselBox,
  CarouselCaption,
  CarouselCaptionBox,
  CarouselCard,
  CarouselImg,
  CarouselTitleBox,
} from "@modules/dashboard/screens/home/styles"

interface Props extends DashboardStackScreenProps<"Home"> {}

export const Home: React.FC<Props> = () => {
  const serviceChunks = divideArrayIntoChunks(serviceCards, 2)

  return (
    <ScreenBox>
      <HomeHeader name="Pedro" />

      <Body>
        <CardsTitleBox>
          <Typography font="lg4" color="koamaru300">
            Services
          </Typography>
        </CardsTitleBox>

        {serviceChunks.map((chunk, i) => {
          return (
            <CardsBox isFirstBox={i === 0} key={i}>
              {chunk.map((service) => {
                return (
                  <ServiceCard
                    key={service.id}
                    sub={service.sub}
                    title={service.title}
                    status={service.status}
                    width={service.width}
                  />
                )
              })}
            </CardsBox>
          )
        })}

        <CarouselTitleBox>
          <Typography font="lg4" color="koamaru300">
            Explore new features
          </Typography>
        </CarouselTitleBox>

        <CarouselBox>
          <CarouselCard>
            <CarouselImg source={require("@assets/images/glasses.jpg")} />
            <CarouselCaptionBox>
              <CarouselCaption>
                Translate texts into more than 30 languages
              </CarouselCaption>
            </CarouselCaptionBox>
          </CarouselCard>

          <CarouselCard>
            <CarouselImg source={require("@assets/images/kindle.jpg")} />
            <CarouselCaptionBox>
              <CarouselCaption>
                Lorem ipsum, dolor sit amet consectetur
              </CarouselCaption>
            </CarouselCaptionBox>
          </CarouselCard>
        </CarouselBox>
      </Body>
    </ScreenBox>
  )
}
