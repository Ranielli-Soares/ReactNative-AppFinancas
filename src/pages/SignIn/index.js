import React from "react";
import { Platform } from 'react-native'

import { Background, Container, Logo, AreaInputBtn, Input, SubmitButton, SubmitText, Link, LinkText } from './styles'

import {useNavigation} from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
      <Logo
        source={require('../../assets/Logo.png')}
      />
      <AreaInputBtn>
        <Input
          placeholder='Seu e-mail'
          placeholderTextColor='#707070'
        />
      </AreaInputBtn>
      <AreaInputBtn>
        <Input
          placeholder='***********'
          placeholderTextColor='#707070'
        />
      </AreaInputBtn>
      <AreaInputBtn>
        <SubmitButton
          activeOpacity={0.8}

        >
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
      </AreaInputBtn>
      <Link
      onPress={()=>navigation.navigate('SignUp')}
      >
        <LinkText>Criar uma conta</LinkText>
      </Link>

    </Container>
    </Background >

  );
}
