import React from 'react';
import Link from 'next/link'
import { getAllFilms, getFilmById } from '../../public/static/Films'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'

const FilmDetails = ({ film }) => {
  return (
    <Container className="text-center">
      <Row>
        <h1 >
          Welcome to <Link href="/"><a>{film?.title}</a></Link>
        </h1>
      </Row>
      <Row>
        <Card>
          <CardHeader>
            <h3>{film?.original_title};</h3>
          </CardHeader>
          <CardBody style={{
            height: "200px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            padding: "10px"
          }}>
            <p>{film?.description}</p>
          </CardBody>
        </Card>
      </Row>

    </Container >
  )
}
export async function getStaticPaths() {
  const films = await getAllFilms()
  // Get the paths we want to pre-render based on posts
  const paths = films.map((film) => ({
    params: { id: film.id },
  }))
  return {
    paths, fallback: true
  }
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts
  const film = await getFilmById(params.id)
  // By returning {props: { films} }, the component
  // will receive `films` as a prop at build time
  console.log("param", params.id);
  return {
    props: {
      film,
    },
  }
}

export default FilmDetails;