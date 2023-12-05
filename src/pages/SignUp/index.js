import React, { useContext } from "react";
import { Platform } from 'react-native'
import { AuthContext } from "../../contexts/auth";

import {
  Background,
  Container,
  AreaInputBtn,
  Input,
  SubmitButton,
  SubmitText
} from '../SignIn/styles'

export default function SignUp() {

  const {user} = useContext(AuthContext);

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInputBtn>
          <Input
            placeholder="Nome completo"
            placeholderTextColor='#707070'
          />
        </AreaInputBtn>
        <AreaInputBtn>
          <Input
            placeholder="Seu e-mail"
            placeholderTextColor='#707070'
          />
        </AreaInputBtn>
        <AreaInputBtn>
          <Input
            placeholder="Sua senha"
            placeholderTextColor='#707070'
          />
        </AreaInputBtn>
        <AreaInputBtn >
          <SubmitButton onPress={() => alert(user.nome)}>
            <SubmitText>Cadastrar</SubmitText>
          </SubmitButton>
        </AreaInputBtn>
      </Container>
    </Background>
  );
}
