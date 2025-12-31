import {
  Column,
  Flex,
  Grid,
  Heading,
  Media,
  Meta,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";
import { baseURL, person, sports } from "@/resources";

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
          Junior World Champion | 2x Vice-Champion of France
        </Text>
        <Text variant="body-default-l" align="center" style={{ maxWidth: "600px" }}>
          Professional Freestyle Football athlete with 6+ years of experience and 300+ performances
          for major brands, sports clubs, and events across France.
        </Text>
      </Column>

      {/* Achievements */}
      <Column gap="l">
        <Heading as="h2" variant="display-strong-m">Achievements</Heading>
        <Grid columns={2} s={{ columns: 1 }} gap="m">
          {sports.achievements.map((achievement, index) => (
            <Row
              key={index}
              padding="l"
              background="surface"
              radius="l"
              gap="m"
              vertical="center"
            >
              <Text variant="heading-strong-xl" onBackground="brand-strong">
                {achievement.year}
              </Text>
              <Column gap="4">
                <Text variant="heading-strong-m">{achievement.result}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {achievement.competition}
                </Text>
              </Column>
            </Row>
          ))}
        </Grid>
      </Column>

      {/* They Trusted Me */}
      <Column gap="l">
        <Heading as="h2" variant="display-strong-m">They Trusted Me</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Performances for prestigious brands, sports clubs, and media organizations.
        </Text>
        <Row wrap gap="l" horizontal="center">
          {sports.trustedBy.map((company, index) => (
            <Flex
              key={index}
              padding="m"
              background="surface"
              radius="m"
              horizontal="center"
              vertical="center"
              style={{ width: "120px", height: "80px" }}
            >
              <Media
                src={company.logo}
                alt={company.name}
                sizes="100px"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </Flex>
          ))}
        </Row>
      </Column>

      {/* Services */}
      <Column gap="l">
        <Heading as="h2" variant="display-strong-m">Services</Heading>
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
      <Column gap="l">
        <Heading as="h2" variant="display-strong-m">Gallery</Heading>
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
