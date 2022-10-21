import { Card } from "react-bootstrap"



const About = () => {
  return (
    <>
    <Card className="mt-5 shadow">
      <Card.Body>
        <Card.Title className="text-center"> About</Card.Title>
        <Card.Text>
          <p>This app will help you navigate and locate people working in different departments</p>
          <p>Version : 1.1.9.1</p>

        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default About