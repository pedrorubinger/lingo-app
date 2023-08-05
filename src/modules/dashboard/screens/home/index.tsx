import { DashboardStackScreenProps } from "@interfaces/index"
import { cardServices, divideArrayIntoChunks } from "@modules/dashboard/utils"
import { ScreenBox, ServiceCard } from "@modules/dashboard/components"
import { Body, CardsBox } from "@modules/dashboard/screens/home/styles"
import { ScreenHeader } from "@components/ScreenHeader"

interface Props extends DashboardStackScreenProps<"Home"> {}

export const Home: React.FC<Props> = () => {
  const serviceChunks = divideArrayIntoChunks(cardServices, 2)

  return (
    <ScreenBox>
      <ScreenHeader title="Home" />

      <Body>
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
      </Body>
    </ScreenBox>
  )
}
