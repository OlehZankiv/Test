import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import {WebView} from 'react-native-webview';
import styled from 'styled-components/native';
import {RootTabsParamList} from '../../navigation/BottomTabsNavigation';
import {Storage} from '../../utils/storage';

export const WebsiteScanner = ({
  route,
}: BottomTabScreenProps<RootTabsParamList, 'WebsiteScanner'>) => {
  const [isLoading, setLoading] = useState(false);
  const [isScanned, setScanned] = useState(false);

  const url = route.params?.url;

  const injectJavaScriptFunction = `
    const getElementByText = (word) => {
      for (let element of document.querySelectorAll('span')) {
          if(element.textContent.includes(word)) return element;
      }
      
      return null;
    }
    
    const copyrightElement = getElementByText("©");
    
    if (copyrightElement) {
      window.ReactNativeWebView.postMessage(copyrightElement.textContent);
    }
  `;

  return (
    <Wrapper>
      {url && (
        <WebView
          javaScriptEnabled
          onError={console.log}
          onHttpError={console.log}
          onMessage={async e => {
            const copyrightText: string = e.nativeEvent.data;

            if (copyrightText) {
              const data = await Storage.get<string[]>('COPYRITES', []);
              if (!data.includes(copyrightText)) {
                Storage.put<string[]>('COPYRITES', [...data, copyrightText]);
              }

              setScanned(true);
              setTimeout(() => setScanned(false), 500);
            }
          }}
          source={{uri: url}}
          injectedJavaScript={injectJavaScriptFunction}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      )}
      {isScanned && <HelperText>Copyright was found</HelperText>}
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
