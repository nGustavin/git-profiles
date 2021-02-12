import React from 'react'
import Head from 'next/head'

import {
  Container,
  Card,
  Header,
  ProfileHead,
  ProfileInfo
} from '../styles/pages/Home'

const Home: React.FC = () => {
  const gitHubAvatar =
    'https://avatars.githubusercontent.com/u/37788848?s=460&u=db8029c50f9510f7384752c7f7fee516aee2459b&v=4'

  return (
    <Container>
      <Head>
        <title>Github Profiler</title>
      </Head>
      <h1>Github Profiler</h1>
      <div className="input-border">
        <input type="text" placeholder="Github username to view" />
      </div>
      <Card>
        <Header>
          <img src={gitHubAvatar} alt="Profile Avatar" />
          <div>
            <ProfileHead>
              <strong>Gustavo Fernandes</strong>
              <span>nGustavin</span>
            </ProfileHead>
            <ProfileInfo>
              <h2>
                Following <span>23</span>
              </h2>
              <h2>
                Followers <span>24</span>
              </h2>
              <h2>
                Stars <span>525</span>
              </h2>
            </ProfileInfo>
          </div>
        </Header>
      </Card>
    </Container>
  )
}

export default Home
