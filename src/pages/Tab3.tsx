import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center><IonTitle>About Us</IonTitle></center>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <center>
          <h1>What is this site all about?</h1>
          <p>Well, to put it simply I wanted to create a functional app that uses a Rest API to generate random useless but interesting facts.</p>
          <p>The API this app utilizes is <a href="https://uselessfacts.jsph.pl/">https://uselessfacts.jsph.pl/</a><br></br>I found it from this large array of free to use APIs in GitHub. Feel free to browse this list by clicking <a href="https://github.com/public-apis/public-apis">Here</a>.</p>
        </center>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
