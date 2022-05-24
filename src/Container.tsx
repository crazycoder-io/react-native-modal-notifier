import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from 'react-native';

import Context from './Context';
import styles, {
  sRectangle,
  sSquare,
  mRectangle,
  mSquare,
  lRectangle,
  lSquare,
} from './styles';

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
  contentImage?: ImageSourcePropType;
  contentImageRadius?: boolean;
  contentImageSize?: 'small' | 'middle' | 'large';
  contentImageType?: 'square' | 'rectangle';
  type?: 'default' | 'warning' | 'error' | 'info';
  primaryButtonPosition?: 'center' | 'left' | 'right';
  autoCloseDelay?: number;
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

  let contentImageStyle: StyleProp<ImageStyle> = {};
  switch (value.contentImageSize) {
    case 'small': {
      if (value.contentImageType === 'square') {
        contentImageStyle = {...contentImageStyle, ...sSquare};
        break;
      } else {
        contentImageStyle = {...contentImageStyle, ...sRectangle};
        break;
      }
    }
    case 'middle': {
      if (value.contentImageType === 'square') {
        contentImageStyle = {...contentImageStyle, ...mSquare};
        break;
      } else {
        contentImageStyle = {...contentImageStyle, ...mRectangle};
        break;
      }
    }
    case 'large': {
      if (value.contentImageType === 'square') {
        contentImageStyle = {...contentImageStyle, ...lSquare};
        break;
      } else {
        contentImageStyle = {...contentImageStyle, ...lRectangle};
        break;
      }
    }
    default:
      break;
  }

  if (value.contentImageRadius) {
    contentImageStyle = { ...contentImageStyle, borderRadius: 20 };
  }

  if (value.autoCloseDelay) {
    setTimeout(() => {
      setVisibility(false);
    }, value.autoCloseDelay);
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
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setVisibility(false)}>
                  <Text style={styles.modalCloseIcon}>X</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.modalContent}>
              {value.message && (
                <Text style={styles.messageText}>{value.message}</Text>
              )}
              {value.contentImage && (
                <Image source={value.contentImage} style={contentImageStyle} />
              )}
              {value.childComponent && value.childComponent}
              {value.primaryButtonText && (
                <TouchableOpacity
                  style={[styles.primaryButton, primaryButtonStyles]}
                  onPress={value.primaryButtonAction}>
                  <Text style={styles.primaryButtonText}>
                    {value.primaryButtonText}
                  </Text>
                </TouchableOpacity>
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
