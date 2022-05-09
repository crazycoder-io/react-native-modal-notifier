import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableHighlight,
  Image,
  ImageSourcePropType,
} from 'react-native';

import Context from './Context';
import styles from './styles';

interface NotifierContainerProps {
  children: JSX.Element;
}
export type ValueProps = {
  title: string;
  message?: string;
  headerShown?: boolean;
  primaryButtonText?: string;
  primaryButtonColor?: string;
  childComponent?: JSX.Element;
  primaryButtonAction?: () => void;
  type?: 'default' | 'warning' | 'error' | 'info';
  primaryButtonPosition?: 'center' | 'left' | 'right';
};

const NotifierContainer: FC<NotifierContainerProps> = ({children}) => {
  const [value, setValue] = useState<ValueProps>({
    title: '',
  });
  const [visibility, setVisibility] = useState(false);
  const contextContent = {
    value,
    setValue,
    visibility,
    setVisibility,
  };

  const primaryButtonStyles: {
    backgroundColor?: string;
    left?: number;
    right?: number;
  } = {};
  if (value.primaryButtonColor) {
    primaryButtonStyles.backgroundColor = value.primaryButtonColor;
  }
  if (value.primaryButtonPosition && value.primaryButtonPosition !== 'center') {
    if (value.primaryButtonPosition === 'left') {
      primaryButtonStyles.right = 40;
    } else {
      primaryButtonStyles.left = 40;
    }
  }

  let icon: ImageSourcePropType;
  switch (value.type) {
    case 'error':
      icon = require(`./assets/error.png`);
      break;
    case 'info':
      icon = require(`./assets/info.png`);
      break;
    case 'warning':
      icon = require(`./assets/warning.png`);
      break;
    default:
      break;
  }

  return (
    <Context.Provider value={contextContent}>
      <Modal animationType="slide" transparent={true} visible={visibility}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {value.headerShown && (
              <View style={styles.modalHeader}>
                {value.type !== 'default' && icon && (
                  <Image source={icon} style={styles.headerIcon} />
                )}
                <Text style={styles.titleText}>{value.title}</Text>
                <TouchableHighlight
                  style={styles.closeButton}
                  onPress={() => setVisibility(false)}>
                  <Text style={styles.modalCloseIcon}>X</Text>
                </TouchableHighlight>
              </View>
            )}
            <View style={styles.modalContent}>
              {value.message && (
                <Text style={styles.messageText}>{value.message}</Text>
              )}
              {value.childComponent && value.childComponent}
              {value.primaryButtonText && (
                <TouchableHighlight
                  style={[styles.primaryButton, primaryButtonStyles]}
                  onPress={value.primaryButtonAction}>
                  <Text style={styles.primaryButtonText}>
                    {value.primaryButtonText}
                  </Text>
                </TouchableHighlight>
              )}
            </View>
          </View>
        </View>
      </Modal>
      {children}
    </Context.Provider>
  );
};

export default NotifierContainer;
