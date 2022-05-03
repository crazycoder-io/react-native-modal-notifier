# React Native Modal Notifier
[![npm](https://badgen.net/npm/v/react-native-modal-notifier)](https://www.npmjs.com/package/react-native-modal-notifier)
[![dw](https://badgen.net/npm/dw/react-native-modal-notifier)](https://www.npmjs.com/package/react-native-modal-notifier)
![platforms: ios, android](https://img.shields.io/badge/platform-ios%2C%20android%2C%20expo-orange)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen)](https://github.com/crazycoder-io/react-native-modal-notifier/blob/master/LICENSE)



**react-native-modal-notifier** is a third party in-app notification package! It provides modal notification popup.
There are more than one usage example;
1. Can be triggered by `useEffect` function
2. Can be triggered by user action
3. Can be triggered by api service data

<p align="center">
    <img src="src/assets/react-native-modal-notifier.gif" alt="drawing" width="200" />
</p>

## Installation
```sh
yarn add react-native-modal-notifier
```
Or
```sh
npm install --save react-native-modal-notifier
```

## Usage

Wrap your app with `NotifierContainer`
```js
import { NotifierContainer } from 'react-native-modal-notifier';
const App = () => (
  <NotifierContainer>
    <HomeScreen />
  </NotifierContainer>
);
```
Then import `useNotifier` anywhere in your code/screen/components
```js
import { useNotifier } from 'react-native-modal-notifier';

const HomeScreen = () => {
    const notifier = useNotifier();

    useEffect(() => {
        alert && notifier({
            title: alert.title,
            message: alert.message
        });
    }, [alert]);

    return (
    <TouchableHighlight
      onPress={() =>
        notifier({
          title: 'New Notification',
          message:
            'New Notification',
        })
      }>
      <Text>Set Notification</Text>
    </TouchableHighlight>
  );
};
```

## Props of useNotifier

| Prop Name | Prop Description | Data Type  | Required  |
|-----------------|:-------------|:---------------:|---------------:|
| title | Title of the message | string | yes |
| message | The message of the content | string | yes |

