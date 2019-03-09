import React from 'react'
import { Navbar, Container, VideoColumn, Player, Text, VideoTitle, RecommendationsColumn } from '../components'

export default () => (
  <>
    <Navbar />
    <Container>
      <VideoColumn>
        <Player />
        <VideoTitle>Alexander Rybak - INTO A FANTASY (official soundtrack for "How To Train Your Dragon 2")</VideoTitle>
        <Text muted>8,366,745 views</Text>
      </VideoColumn>
      <RecommendationsColumn>
        <Text>This is another column</Text>
      </RecommendationsColumn>
    </Container>
  </>
)