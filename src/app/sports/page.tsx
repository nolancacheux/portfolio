import {
  Column,
  Flex,
  Grid,
  Heading,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { baseURL, person, sports } from "@/resources";
import styles from "./sports.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: sports.title,
    description: sports.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(sports.title)}`,
    path: sports.path,
  });
}

export default function Sports() {
  return (
    <Column maxWidth="l" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={sports.title}
        description={sports.description}
        path={sports.path}
        image={`/api/og/generate?title=${encodeURIComponent(sports.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${sports.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero Section */}
      <Column gap="m" horizontal="center" align="center" paddingY="xl">
        <Heading variant="display-strong-xl">Freestyle Football</Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak" align="center">
          Junior World Champion | 2x Vice-Champion of France | Top 15 World Ranking
        </Text>
        <Text variant="body-default-l" align="center" style={{ maxWidth: "600px" }}>
          Professional Freestyle Football athlete with 6+ years of experience and 300+ performances
          for major brands, sports clubs, and events across France.
        </Text>
      </Column>

      {/* Achievements Timeline */}
      <Column gap="l" horizontal="center">
        <Heading as="h2" variant="display-strong-m" align="center">Achievements</Heading>
        <div className={styles.horizontalTimeline}>
          <div className={styles.timelineLine} />
          <Row className={styles.timelinePoints}>
            {[...sports.achievements]
              .sort((a, b) => parseInt(a.year) - parseInt(b.year))
              .map((achievement, index) => (
                <Column key={index} className={styles.timelinePoint} horizontal="center" gap="8">
                  <div className={styles.dot} />
                  <Text variant="heading-strong-l" onBackground="brand-strong">
                    {achievement.year}
                  </Text>
                  <Text variant="heading-strong-s" align="center">
                    {achievement.link ? (
                      <SmartLink href={achievement.link} className={styles.achievementLink}>
                        {achievement.result}
                      </SmartLink>
                    ) : (
                      achievement.result
                    )}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak" align="center">
                    {achievement.competition}
                  </Text>
                </Column>
              ))}
          </Row>
        </div>
      </Column>

      {/* They Trusted Me */}
      <Column gap="l" horizontal="center">
        <Heading as="h2" variant="display-strong-m" align="center">They Trusted Me</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          Performances for prestigious brands, sports clubs, and media organizations.
        </Text>
        <Row wrap gap="m" horizontal="center">
          {sports.trustedBy.map((company, index) => {
            const isDarkLogo = company.logo.includes('daspm-logo-noir') ||
                              company.logo.includes('Ferrero_logo') ||
                              company.logo.includes('France_3');
            return (
              <Flex
                key={index}
                padding="s"
                radius="m"
                horizontal="center"
                vertical="center"
                className={styles.logoContainer}
                style={{ width: "80px", height: "60px" }}
              >
                <Media
                  src={company.logo}
                  alt={company.name}
                  sizes="60px"
                  className={`${styles.logoImage} ${isDarkLogo ? styles.darkLogo : ''}`}
                />
              </Flex>
            );
          })}
        </Row>
      </Column>

      {/* Services */}
      <Column gap="l" horizontal="center">
        <Heading as="h2" variant="display-strong-m" align="center">Services</Heading>
        <Grid columns={3} s={{ columns: 1 }} gap="m">
          <Column padding="l" background="surface" radius="l" gap="s">
            <Heading as="h3" variant="heading-strong-l">Shows</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Spectacular performances adapted to any event type - from quick demonstrations
              to complete shows with music and choreography.
            </Text>
          </Column>
          <Column padding="l" background="surface" radius="l" gap="s">
            <Heading as="h3" variant="heading-strong-l">Workshops</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Interactive sessions to introduce freestyle football to all ages and skill levels.
            </Text>
          </Column>
          <Column padding="l" background="surface" radius="l" gap="s">
            <Heading as="h3" variant="heading-strong-l">Corporate</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Custom performances for product launches, team buildings, and corporate gatherings.
            </Text>
          </Column>
        </Grid>
      </Column>

      {/* Gallery */}
      <Column gap="l" horizontal="center">
        <Heading as="h2" variant="display-strong-m" align="center">Gallery</Heading>
        <Grid columns={3} s={{ columns: 2 }} gap="m">
          {sports.images.map((image, index) => (
            <Media
              key={index}
              src={image.src}
              alt={image.alt}
              aspectRatio="4/3"
              radius="m"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          ))}
        </Grid>
      </Column>
    </Column>
  );
}
