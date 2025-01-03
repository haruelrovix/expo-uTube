import Reactotron, { networking, openInEditor, trackGlobalErrors } from 'reactotron-react-native';

import Constants from 'expo-constants';

Reactotron.configure({ name: Constants.expoConfig?.name }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(networking())
  .use(openInEditor())
  .use(trackGlobalErrors())
  .connect(); // let's connect!
