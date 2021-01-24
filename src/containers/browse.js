import React, { useContext, useState, useEffect } from 'react';

import { Loading, Header, Card } from '../components';
import FooterContainer from '../containers/footer';
import ProfileContainer from './profiles';
import { FirebaseContext } from '../context/firebase';
import logo from '../logo.svg';
import * as ROUTES from '../constrains/routes';
export default function Browse({ slides }) {
  const { firebase } = useContext(FirebaseContext);

  const [category, setCategory] = useState('series');
  const [slideRows, setSlideRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Group>
              <Header.Search>
                <Header.SearchIcon />
                <Header.SearchInput />
              </Header.Search>
            </Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((el, index) => (
          <Card key={index}>
            <Card.Title>{el.title}</Card.Title>
            <Card.Entities>
              {el.data.map((el) => (
                <Card.Item key={el.docId} item={el}>
                  <Card.Image
                    src={`/images/${category}/${el.genre}/${el.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{el.title}</Card.SubTitle>
                    <Card.Text>{el.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <h1>Heelo</h1>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
}
