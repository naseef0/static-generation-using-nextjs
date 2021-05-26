import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getAllFilms } from '../public/static/Films'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'

const Home = ({ films }) => {
  return (
    <Container className="text-center">
      <Row>
        <h1 >
          Welcome to film world
      </h1>
        <p className={styles.description}>
        </p>
      </Row>
      <Row>
        {Array.isArray(films) && films.length > 0 && films.map((film, index) => (
          <Link href={`/films/${film.id}`}>
            <Col lg={4} key={`film-${index + 1}`} className="p-5">
              <Card>
                <CardHeader>
                  <h3>{film?.title};</h3>
                </CardHeader>
                <CardBody style={{
                  height: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  padding: "10px"
                }}>
                  <p>{film.description}</p>
                </CardBody>
              </Card>
            </Col>
          </Link>
        ))}
      </Row>

    </Container>
  )
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const films = await getAllFilms()
  // By returning {props: { films} }, the component
  // will receive `films` as a prop at build time
  return {
    props: {
      films,
    },
  }
}

export default Home;