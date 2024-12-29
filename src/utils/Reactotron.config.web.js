import apisaucePlugin from 'reactotron-apisauce';
import Reactotron from 'reactotron-react-js';

import Constants from 'expo-constants';

const Tron = Reactotron.configure({ name: Constants.expoConfig?.name }) // controls connection & communication settings
  .use(
    apisaucePlugin({
      // ignoreContentTypes: /^(image)\/.\*$/i // <--- a way to skip printing the body of some requests (default is any image)
    })
  ) // <-- here we go!!!
  .connect(); // let's connect!

export default Tron;
