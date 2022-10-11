import React from 'react'
import { Divider, Header, Image, Segment } from 'semantic-ui-react'

const daycontent = () => (
  <Segment>
    <Header as='h2' floated='right'>
      Floated Content
    </Header>

    <Divider clearing />
    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    
  </Segment>
  

)

export default daycontent