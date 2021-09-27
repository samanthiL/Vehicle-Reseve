import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Cards.css';
import Card  from 'react-bootstrap/Card';
import { Row,Col, Container} from 'react-bootstrap';
function Cards(){

  const [reviewlist, setreviewlist] = useState([]);

  useEffect(() =>{
     Axios.get('http://localhost:3001/api/get') 
    .then((response) => {
      setreviewlist(response.data);
    });
  },[]);

  return (
    <>
    <div className="App">
        <h1>Crud application</h1>

    {reviewlist.map((user) => (
      <div>
      {/* <div className="user">{user.mname}</div> */}
      <div>
      <Container>
<Row style={{ display: 'inline-flex' }}>
<Col class="col-md-9">

<Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card {user.mname}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            </Card.Body>

        </Card> 

{/* </Col>
<Col sm> */}
  <p>fsdfsfdsadf</p>
               {/* <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card {user.mname}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            </Card.Body>

        </Card>  */}
        </Col>

{/* <Col sm>
  
<Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card {user.mname}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            </Card.Body>

        </Card> 
</Col> */}
</Row>
</Container>

</div>
      </div>
    ))}
  </div>


  </>
  );
}

export default Cards;

















