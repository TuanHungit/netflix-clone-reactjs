import React, { useContext, useState, useEffect } from 'react';

import { Loading, Header } from '../components';
import ProfileContainer from './profiles';
import { FirebaseContext } from '../context/firebase';

export default function Browse({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {' '}
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <p>Hello</p>
      </Header>
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
}
