import React from 'react'
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const daycontent = (title) => (
  <Segment>
    <Link to="/day">
    <Header as='h2' floated='right'>
      Day
    </Header>
    </Link>

    <Divider clearing />
    <p>Bench press + 3 more...</p>
    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    
  </Segment>
  

)

export default daycontent