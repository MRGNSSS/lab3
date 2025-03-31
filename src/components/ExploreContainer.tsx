import { IonButton } from '@ionic/react';
import './ExploreContainer.css';
import { useState } from 'react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
const [facttext, setfacttext]=useState("")


  async function Fact() {
    let response=await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    response=await response.json()
    setfacttext(response.text) 
  }


  return (
    <div className="container">
      <strong>{name}</strong>
      <p>{facttext}</p>
      <IonButton onClick={Fact} size="large">get random fact</IonButton>
    </div>
  );
};

export default ExploreContainer;
