import { IonContent, IonBackButton, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonRouterLink } from '@ionic/react';
import './Home.css';
import '../components/ExploreContainer.css';

const ProductoRutVirtual: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="/" />
            <IonTitle>Portafolio William Garnica</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <strong>Rut Virtual</strong>
          <br />
          <a target="blank" href="https://muisca.dian.gov.co/WebRutVirtualInscripcion/">ir a la aplicación</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProductoRutVirtual;
