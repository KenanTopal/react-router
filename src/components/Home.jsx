import { Card, Button } from "react-bootstrap"

const Home = () => {
  return (
    <>
    <Card className="mt-5 w-50 m-auto shadow">
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1663013635746-8e4125b31f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Card.Body className="text-center">
        <Button variant="primary"> Locate Now</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Home