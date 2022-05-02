import React, {FC, useState} from 'react';
import {View, Text, Modal, TouchableHighlight} from 'react-native';

import Context from './Context';
import styles from './styles';

interface NotifierContainerProps {
  children: JSX.Element | React.Component;
}
export type ValueProps = {
  title: string;
  message: string;
};

const NotifierContainer: FC<NotifierContainerProps> = ({children}) => {
  const [value, setValue] = useState<ValueProps>({
    title: '',
    message: '',
  });
  const [visibility, setVisibility] = useState(false);
  const contextContent = {
    value,
    setValue,
    visibility,
    setVisibility,
  };

  return (
    <Context.Provider value={contextContent}>
      <Modal animationType="slide" transparent={true} visible={visibility}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.titleText}>{value.title}</Text>
              <TouchableHighlight
                style={styles.closeButton}
                onPress={() => setVisibility(false)}>
                <Text style={styles.modalCloseIcon}>X</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.modalContent}>
              <Text style={styles.messageText}>{value.message}</Text>
            </View>
          </View>
        </View>
      </Modal>
      {children}
    </Context.Provider>
  );
};

export default NotifierContainer;
