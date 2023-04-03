import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {RootStackParamList} from '../../navigation';
import {Storage} from '../../utils/storage';

const CORRECT_LOGIN = 'some.email@gmail.com';
const CORRECT_PASSWORD = 'hello';

export const Auth = () => {
  const [login, onChangeLogin] = useState('');
  const [password, onChangePassword] = useState('');

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Auth'>>();

  useEffect(() => {
    Storage.get<boolean>('IS_AUTH', false).then(isAuth => {
      if (isAuth) {
        navigation.navigate('Home');
      }
    });
  }, [navigation]);

  const onSubmit = async () => {
    if (login === CORRECT_LOGIN && password === CORRECT_PASSWORD) {
      await Storage.put<boolean>('IS_AUTH', true);
      return navigation.navigate('Home');
    } else {
      Alert.alert(
        'Password or Login is wrong!',
        `
          Correct values:
          
          login: some.email@gmail.com;
          password: hello
    `,
      );
    }
  };

  return (
    <Wrapper>
      <FormWrapper>
        <Title>LOG IN</Title>
        <Input
          value={login}
          onChangeText={onChangeLogin}
          autoCapitalize="none"
          placeholder="Login"
          autoComplete="off"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholderTextColor="black"
        />
        <Input
          value={password}
          autoComplete="off"
          autoCapitalize="none"
          onChangeText={onChangePassword}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          placeholderTextColor="black"
        />
        <LoginButton onPress={onSubmit}>
          <LoginButtonText>LOG IN</LoginButtonText>
        </LoginButton>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: darkblue;
  justify-content: center;
`;

const FormWrapper = styled.View`
  align-items: flex-end;
  padding: 36px 24px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 900;
  color: white;
  width: 100%;
  text-align: center;
  margin-bottom: 64px;
`;

const Input = styled.TextInput`
  height: 40px;
  margin-top: 12px;
  width: 100%;
  background-color: white;
  border-width: 1px;
  padding: 10px;
`;

const LoginButton = styled.TouchableOpacity`
  margin-top: 32px;
  padding: 12px 8px;
  width: 50%;
  border-radius: 8px;
  background-color: gray;
`;

const LoginButtonText = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
`;
