import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

import config from './config';

const auth = getAuth(config);

// https://firebase.google.com/docs/auth/web/google-signin#handle_the_sign-in_flow_with_the_firebase_sdk
export default async function login() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // const credential = GoogleAuthProvider.credentialFromResult(result);
  // const token = credential.accessToken;
  // const user = result.user;

  return { result };
}
