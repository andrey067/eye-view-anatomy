import { IonFooter, IonModal, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import  './modal.css';

interface ModalPros {
    open: boolean
    title: string
    content: string
    children?: React.ReactNode
}

export default function Modal(props: ModalPros) {
    return (<div>
        <IonFooter>
            <IonModal isOpen={props.open}
                initialBreakpoint={0.15}
                breakpoints={[0.15, 0.5, 0.9, 1]}
                backdropDismiss={false}
                backdropBreakpoint={0.5}>
                <IonContent class="ion-padding">
                    <IonCard>
                        <IonCardHeader className="modal-content">
                            <IonCardTitle>{props.title}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent >
                            <p dangerouslySetInnerHTML={{ __html: props.content }} />
                        </IonCardContent>
                    </IonCard>
                    {props.children}
                </IonContent>
            </IonModal>
        </IonFooter>
    </div>);
}