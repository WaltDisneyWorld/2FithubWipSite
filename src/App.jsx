/* eslint-disable no-unused-vars */
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="FitHub: The AI based Fitness App"
        description="Welcome to our fitness app! We are dedicated to helping you achieve your
        fitness goals through innovative features and personalized
        recommendations."
        showBtn
        mockupImg={assets.three}
        banner="banner"
      />
      <SectionWrapper
        title="Smart Camera Feature"
        description=" Our smart camera feature allows you to click or upload a photo of any
        gym machine, and it will provide information on how to use the machine,
        its benefits, and recommend exercises you can perform using it."
        mockupImg={assets.six}
        reverse
      />
      <Features />

      <SectionWrapper
        title="Creative way to showcase the app"
        description="Explore our app's smart camera feature, personalized diet recommendations, and customized exercise routines to optimize your fitness journey."
        mockupImg={assets.nine}
        banner="banner02"
      />


    </>
  );
};

export default App;
