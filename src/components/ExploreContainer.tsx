import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>press this button to get a random fact!</p>
      <IonButton size="large">get random fact</IonButton>
    </div>
  );
};

export default ExploreContainer;
