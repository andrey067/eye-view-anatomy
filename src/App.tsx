import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import './App.css'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useRef, useState } from 'react';
import Modal from './components/modal/modal';

function App() {
  setupIonicReact();
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperClass>();

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };

  const navigateToSlide = (slideIndex: number) => {
    swiperRef.current?.slideTo(slideIndex);
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen scrollY={true}>
          <Swiper onSwiper={(swiper) => swiperRef.current = swiper} onSlideChange={handleSlideChange}>
            <SwiperSlide>
              <IonImg src={"../public/olho.png"} style={{ width: '300px', height: '550px', display: 'block', margin: 'auto' }} alt="olho" /> {/* 0 olho  */}
            </SwiperSlide>
            <SwiperSlide>
              <IonImg style={{ width: '300px', height: '550px', display: 'block', margin: 'auto' }} src="../public/esclera.png" alt="esclera" /> {/* 1 esclera  */}
            </SwiperSlide>
            <SwiperSlide>
              <IonImg style={{ width: '300px', height: '550px', display: 'block', margin: 'auto' }} src="../public/cornea.png" alt="cornea" /> {/* 2 cornea  */}
            </SwiperSlide>
            <SwiperSlide>
              <IonImg style={{ width: '300px', height: '550px', display: 'block', margin: 'auto' }} src="../public/pupila.png" alt="pupila" />{/*3 esclera  */}
            </SwiperSlide>
            <SwiperSlide>
              <IonImg style={{ width: '300px', height: '550px', display: 'block', margin: 'auto' }} src="../public/cristalino.png" alt="cristalino" /> {/*4 cristalino  */}
            </SwiperSlide>
            <SwiperSlide>
              <IonImg style={{ width: '300px', height: '550px', display: 'block', margin: 'auto' }} src="../public/iris.png" alt="iris" /> {/*5 iris  */}
            </SwiperSlide>
            <SwiperSlide>
              <IonImg style={{ width: '300px', height: '550px', display: 'block', margin: 'auto' }} src="../public/retina.png" alt="retina" />  {/*6 retina  */}
            </SwiperSlide>
            <SwiperSlide>
              <IonImg style={{ width: '300px', height: '550px', display: 'block', margin: 'auto' }} src="../public/nervooptico.png" alt="nervooptico" /> {/*7 nervooptico  */}
            </SwiperSlide>
            <SwiperSlide>
              <IonImg style={{ width: '300px', height: '550px', display: 'block', margin: 'auto' }} src="../public/coroide.png" alt="coroide" /> {/*8 coroide  */}
            </SwiperSlide>
            <SwiperSlide>
              <IonImg style={{ width: '300px', height: '550px', display: 'block', margin: 'auto' }} src="../public/humorvítreo.png" alt="coroide" /> {/*8 humorvítreo  */}
            </SwiperSlide>
          </Swiper>
          <Modal open={activeSlide === 0} title={'O que é o olho humano?'} content={`<b>Olho humano</b> é o órgão responsável pela visão do ser humano.
                Tem diâmetro antero-posterior de aproximadamente 24,15 milímetros,
                diâmetros horizontal e vertical ao nível do equador de aproximadamente 23,48 milímetros,
                circunferência ao equador de 75 milímetros, pesa 7,5 gramas e tem volume de 6,5 cm³.
                O olho humano pode distinguir cerca de 10 milhões de cores e é capaz de detectar um único de fóton.
                Sua anatomia é composta por:`} >
            <IonList inset={true}>
              <IonItem button={true} onClick={() => navigateToSlide(1)}>
                <IonLabel>Esclera</IonLabel>
              </IonItem>
              <IonItem button={true} onClick={() => navigateToSlide(2)}>
                <IonLabel>Córnea</IonLabel>
              </IonItem>
              <IonItem button={true} onClick={() => navigateToSlide(3)}>
                <IonLabel>Pupila</IonLabel>
              </IonItem>
              <IonItem button={true} onClick={() => navigateToSlide(4)}>
                <IonLabel>Cristalino</IonLabel>
              </IonItem>
              <IonItem button={true} onClick={() => navigateToSlide(5)}>
                <IonLabel>Íris</IonLabel>
              </IonItem>
              <IonItem button={true} onClick={() => navigateToSlide(6)}>
                <IonLabel>Retina</IonLabel>
              </IonItem>
              <IonItem button={true} onClick={() => navigateToSlide(7)}>
                <IonLabel>Nervo Óptico</IonLabel>
              </IonItem>
              <IonItem button={true} onClick={() => navigateToSlide(8)}>
                <IonLabel>Coróide</IonLabel>
              </IonItem>
              <IonItem button={true} onClick={() => navigateToSlide(9)}>
                <IonLabel>Humor Aquoso e Humor Vítreo</IonLabel>
              </IonItem>
            </IonList>
          </Modal>
          <Modal open={activeSlide === 1} title={'O que é a Esclera?'} content={`
          <b>Esclera</b> é a parte branca e resistente do olho humano. 
            Ela é uma camada fibrosa e opaca que cobre a maior parte do globo ocular, 
            exceto na frente, onde é substituída pela córnea transparente.
             A esclera tem várias funções importantes:
             <ul>
                <li>Proteção: Ela protege as estruturas internas sensíveis do olho, como a retina e o cristalino, contra danos físicos.</li>
                <li>Manutenção da Forma: Ajuda a manter a forma esférica do globo ocular, fornecendo suporte estrutural.</li>
                <li>Fixação Muscular: Serve como ponto de fixação para os músculos oculares que controlam os movimentos dos olhos.</li>
                <li>Prevenção da Entrada de Luz: Como é opaca, a esclera ajuda a evitar que a luz entre no olho, exceto através da córnea e da pupila.</li>
            </ul>`} >
            <IonList inset={true}>
              <IonItem >
                <IonIcon slot="start" icon={chevronBack} size="large"></IonIcon>
                <IonLabel onClick={() => navigateToSlide(0)}>Voltar</IonLabel>
              </IonItem>
            </IonList>
          </Modal>
          <Modal open={activeSlide === 2} title={'O que é a Córnea?'} content={`
          <b>Córnea</b> é a parte frontal transparente do olho humano. Ela desempenha várias funções importantes, incluindo:
          <ul>
            <li>Proteção: Protege as estruturas internas do olho contra danos externos.</li>
            <li>Foco: Ela é responsável por focar a luz que entra no olho, ajudando na formação de imagens claras na retina.</li>
            <li>Transmissão de Luz: Permite a passagem da luz para o interior do olho, contribuindo para a visão.</li>
            <li>Refração: A curvatura da córnea ajuda a dobrar a luz, o que é essencial para a focalização adequada.</li>
          </ul>`} >
            <IonList inset={true}>
              <IonItem >
                <IonIcon slot="start" icon={chevronBack} size="large"></IonIcon>
                <IonLabel onClick={() => navigateToSlide(0)}>Voltar</IonLabel>
              </IonItem>
            </IonList>
          </Modal>
          <Modal open={activeSlide === 3} title={'O que é a Pupila?'} content={`
          <b>Pupila</b> é a abertura no centro da íris do olho humano. Ela desempenha várias funções importantes, incluindo:
          <ul>
            <li>Regulação da Quantidade de Luz: A pupila ajusta seu tamanho para controlar a quantidade de luz que entra no olho.</li>  
            <li>Adaptação à Luminosidade: Em condições de luz brilhante, a pupila se contrai para reduzir a entrada de luz, enquanto em condições de pouca luz, ela se dilata para permitir mais luz entrar.</li>  
            <li>Proteção: A pupila pode se contrair rapidamente em resposta a estímulos luminosos intensos, protegendo assim a retina de danos causados por luz excessiva.</li>
          </ul>`} >
            <IonList inset={true}>
              <IonItem >
                <IonIcon slot="start" icon={chevronBack} size="large"></IonIcon>
                <IonLabel onClick={() => navigateToSlide(0)}>Voltar</IonLabel>
              </IonItem>
            </IonList>
          </Modal>
          <Modal open={activeSlide === 4} title={'O que é a Cristalino?'} content={`
          <b>Cristalino</b> é uma lente natural e flexível localizada atrás da íris do olho humano. Ele desempenha várias funções importantes, incluindo:
          <ul>
            <li>Focalização: O cristalino é responsável por ajustar seu formato para focar a luz que entra no olho, permitindo a formação de imagens claras na retina.</li>
            <li>Refração: Ao mudar sua forma, o cristalino ajuda a dobrar a luz, o que é essencial para a focalização adequada e para a formação de imagens nítidas.</li>
            <li>Visão de Perto e de Longe: A capacidade de mudar de forma permite ao cristalino focar em objetos próximos e distantes, proporcionando uma visão clara em diferentes distâncias.</li>
            <li>Transparência: O cristalino é altamente transparente, permitindo a passagem da luz sem dispersão, o que é crucial para a qualidade da visão.</li>
          </ul>`} >
            <IonList inset={true}>
              <IonItem >
                <IonIcon slot="start" icon={chevronBack} size="large"></IonIcon>
                <IonLabel onClick={() => navigateToSlide(0)}>Voltar</IonLabel>
              </IonItem>
            </IonList>
          </Modal>
          <Modal open={activeSlide === 5} title={'O que é a Íris?'} content={`
          <b>Íris</b> é a parte colorida do olho humano localizada entre a córnea e o cristalino. Ela desempenha várias funções importantes, incluindo:
          <ul>
            <li>Regulação da Quantidade de Luz: A íris controla a quantidade de luz que entra no olho ajustando o tamanho da pupila.</li>   
            <li>Proteção contra a Luz: Em condições de luz intensa, a íris se contrai para reduzir a entrada de luz, protegendo assim as estruturas sensíveis do olho.</li>
            <li>Adaptação à Luz: A íris ajuda o olho a se adaptar a diferentes níveis de luminosidade, controlando o tamanho da pupila para garantir uma visão confortável em diferentes condições de iluminação.</li>
            <li>Contribuição para a Cor dos Olhos: A cor da íris determina a cor dos olhos de uma pessoa e é influenciada pela quantidade e distribuição de pigmentos presentes na íris.</li>
          </ul>`} >
            <IonList inset={true}>
              <IonItem >
                <IonIcon slot="start" icon={chevronBack} size="large"></IonIcon>
                <IonLabel onClick={() => navigateToSlide(0)}>Voltar</IonLabel>
              </IonItem>
            </IonList>
          </Modal>
          <Modal open={activeSlide === 6} title={'O que é a Retina?'} content={`
          <b>Retina</b> é uma camada sensível à luz localizada no fundo do olho humano. Ela desempenha várias funções importantes, incluindo:
          <ul>
            <li>Conversão de Luz em Sinais Elétricos: A retina contém células fotossensíveis chamadas cones e bastonetes, que convertem a luz em sinais elétricos.</li>  
            <li>Formação de Imagens: Os sinais elétricos gerados pelos cones e bastonetes são processados pela retina e transmitidos ao cérebro através do nervo óptico, onde são interpretados como imagens.</li>
            <li>Percepção de Cores: Os cones na retina são responsáveis pela percepção das cores, permitindo que vejamos o mundo em uma variedade de tonalidades.</li>
            <li>Visão Noturna: Os bastonetes na retina são sensíveis à luz fraca e são responsáveis pela visão em condições de pouca luz, como durante a noite.</li>
          </ul>`} >
            <IonList inset={true}>
              <IonItem >
                <IonIcon slot="start" icon={chevronBack} size="large"></IonIcon>
                <IonLabel onClick={() => navigateToSlide(0)}>Voltar</IonLabel>
              </IonItem>
            </IonList>
          </Modal>
          <Modal open={activeSlide === 7} title={'O que é o Nervo Óptico?'} content={`
          <b>Nervo Óptico</b> é um conjunto de fibras nervosas que transmitem os sinais visuais da retina para o cérebro humano. Ele desempenha várias funções importantes, incluindo:
          <ul>
            <li>Transmissão de Sinais Visuais: O nervo óptico transporta os impulsos elétricos gerados pela retina para o cérebro, onde são interpretados como imagens.</li>
            <li>Integração Sensorial: No cérebro, os sinais visuais recebidos pelo nervo óptico são integrados com outras informações sensoriais para formar uma percepção completa do ambiente visual.</li>
            <li>Percepção de Profundidade e Distância: O processamento das informações visuais recebidas pelo nervo óptico permite a percepção de profundidade, distância e posição dos objetos no ambiente.</li>
            <li>Visão Binocular: O nervo óptico transmite informações visuais de ambos os olhos para o cérebro, o que é essencial para a visão binocular e a percepção tridimensional.</li>
          </ul>`} >
            <IonList inset={true}>
              <IonItem >
                <IonIcon slot="start" icon={chevronBack} size="large"></IonIcon>
                <IonLabel onClick={() => navigateToSlide(0)}>Voltar</IonLabel>
              </IonItem>
            </IonList>
          </Modal>
          <Modal open={activeSlide === 8} title={'O que é o Coróide?'} content={`
          <b>Coróide</b> é uma camada vascular localizada entre a retina e a esclera do olho humano. Ele desempenha várias funções importantes, incluindo:
          <ul>
            <li>Provisão de Nutrientes e Oxigênio: O coróide fornece oxigênio e nutrientes para as células da retina, ajudando a mantê-las saudáveis e funcionando corretamente.</li>  
            <li>Termorregulação: As numerosas vasos sanguíneos do coróide ajudam a regular a temperatura do olho, garantindo que permaneça dentro de uma faixa adequada para o funcionamento celular.</li>
            <li>Redução de Reflexos: A pigmentação escura do coróide ajuda a absorver a luz que penetra na retina, reduzindo os reflexos e melhorando a qualidade da imagem visual.</li>  
            <li>Manutenção da Forma do Olho: O coróide contribui para manter a forma esférica do olho, fornecendo suporte estrutural e prevenindo deformações.</li>
          </ul>`} >
            <IonList inset={true}>
              <IonItem >
                <IonIcon slot="start" icon={chevronBack} size="large"></IonIcon>
                <IonLabel onClick={() => navigateToSlide(0)}>Voltar</IonLabel>
              </IonItem>
            </IonList>
          </Modal>
          <Modal open={activeSlide === 9} title={'O que é o Humor Vítreo?'} content={`
          <b>Humor Vítreo</b> é um gel transparente e viscoso que preenche o espaço dentro do olho entre a lente cristalina e a retina. Ele desempenha várias funções importantes, incluindo:
          <ul>
              <li>Suporte Estrutural: O humor vítreo ajuda a manter a forma esférica do olho, fornecendo suporte estrutural e pressão interna.</li>
              <li>Transmissão de Luz: Sendo transparente, o humor vítreo permite a passagem da luz através do olho, contribuindo para a formação de imagens na retina.</li>
              <li>Proteção: O humor vítreo ajuda a proteger as estruturas internas do olho contra impactos físicos e movimentos bruscos.</li>
              <li>Manutenção da Pressão Intraocular: O humor vítreo exerce uma leve pressão no interior do olho, ajudando a manter uma pressão intraocular adequada para o funcionamento ótimo.</li>
          </ul>`} >
            <IonList inset={true}>
              <IonItem >
                <IonIcon slot="start" icon={chevronBack} size="large"></IonIcon>
                <IonLabel onClick={() => navigateToSlide(0)}>Voltar</IonLabel>
              </IonItem>
            </IonList>
          </Modal>
        </IonContent>
      </IonPage>
    </IonApp >)
};

export default App;