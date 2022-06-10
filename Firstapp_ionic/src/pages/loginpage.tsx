import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonToolbar
} from '@ionic/react';
import { eye, person } from 'ionicons/icons';
import React, { useState } from 'react';

import './loginpage.css';

const LoginPage: React.FC = ({ history }: any) => {
  const goTo = (path: string) => {
    if (Validate()) {
      history.push(path);
    }
    else {
      console.log('Invalid input')
    }
  }
  let UserName = 'sandhya';
  let Password = 'Sanju*2';

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  console.log(username);


  const Validate = () => {
    if (username === UserName && password === Password) {
      return true;
    } else {
      return false;
    }
  }
  return (

    <IonPage className='ion-hide-sm-{dir}'>
        <IonHeader>
          <IonToolbar>
            <IonLabel>Ionic</IonLabel>
          </IonToolbar>
        </IonHeader>
        <IonContent className='content'>
        <IonCard className="card">
          <IonCardHeader className='ion-text-center header'>
            <IonCardTitle className='title'>Administrator Login</IonCardTitle>
            <IonLabel className='subtitle'> Please enter your admin credentials to gain access</IonLabel>
          </IonCardHeader>
          <IonCardContent className='ion-text-center'>
            <IonInput className="input1 ion-text-left"
              type="text"
              placeholder='Username or email address'
              onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
            <span className="eye"><IonIcon size="small" icon={person}></IonIcon></span>
            <IonInput className="input2 ion-text-left"
              type="password"
              placeholder='Password'
              onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
            <span className="eye"><IonIcon size="small" icon={eye}></IonIcon></span>
            <IonButton className=' button ion-text-capitalize' color="purple" shape='round' onClick={e => goTo('/home')}><IonLabel className='login'>Login</IonLabel></IonButton>
            <br />
            <br />
            <IonLabel><a href="#"></a>Forgot Password?</IonLabel>
            <br />
            <br />
            <br />
            <IonLabel className='label'>New to Indigo? <a href="#">Register here</a></IonLabel>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default LoginPage