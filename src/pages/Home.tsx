import { IonBackButton, IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import '../components/ExploreContainer.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Portafolio William Garnica</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <strong>Proyecto Inscripción al RUT Virtual</strong>
          <br/ >
          <IonRouterLink routerLink="/ProyectoRutVirtual">Ver detalles del proyecto</IonRouterLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
