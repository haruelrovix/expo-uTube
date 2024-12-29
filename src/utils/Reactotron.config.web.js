import Constants from 'expo-constants';
import Reactotron from 'reactotron-react-js'
import apisaucePlugin from 'reactotron-apisauce'

const Tron = Reactotron
  .configure({ name: Constants.expoConfig?.name }) // controls connection & communication settings
  .use(
    apisaucePlugin({
      // ignoreContentTypes: /^(image)\/.\*$/i // <--- a way to skip printing the body of some requests (default is any image)
    })
  ) // <-- here we go!!!
  .connect() // let's connect!

export default Tron;
