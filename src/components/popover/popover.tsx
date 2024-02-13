import { IonButton, IonContent, IonPopover } from '@ionic/react';
function Popover() {
    return (
      <>        
        <IonPopover trigger="auto-trigger" size="auto">
          <IonContent class="ion-padding">Hello!</IonContent>
        </IonPopover>
  
        <IonButton id="cover-trigger">Size=Cover</IonButton>
        <IonPopover trigger="cover-trigger" size="cover">
          <IonContent class="ion-padding">Hello!</IonContent>
        </IonPopover>
      </>
    );
  }

  export default Popover;