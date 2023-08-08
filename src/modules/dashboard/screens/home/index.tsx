import { DashboardStackScreenProps } from "@interfaces/index"
import { ScreenBox, Typography } from "@components/index"
import { serviceCards, divideArrayIntoChunks } from "@modules/dashboard/utils"
import {
  FeaturesCarrousel,
  HomeHeader,
  ServiceCard,
} from "@modules/dashboard/components"
import {
  Body,
  CardsBox,
  CardsTitleBox,
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
                    screen={service.path}
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

        <FeaturesCarrousel />
      </Body>
    </ScreenBox>
  )
}
