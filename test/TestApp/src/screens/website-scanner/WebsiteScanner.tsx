import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import {WebView} from 'react-native-webview';
import styled from 'styled-components/native';
import {RootTabsParamList} from '../../navigation/BottomTabsNavigation';

export const WebsiteScanner = ({
  route,
}: BottomTabScreenProps<RootTabsParamList, 'WebsiteScanner'>) => {
  const [isLoading, setLoading] = useState(false);
  const url = route.params?.url;

  return (
    <Wrapper>
      {url && (
        <WebView
          source={{uri: url}}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      )}
      {(!url || isLoading) && (
        <HelperText>
          {isLoading
            ? 'LOADING...'
            : 'You need to select item in the list firstly'}
        </HelperText>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: darkblue;
`;

const HelperText = styled.Text`
  font-size: 24px;
  color: white;
  text-align: center;
  padding: 124px 24px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 1;
  background-color: darkblue;
`;
