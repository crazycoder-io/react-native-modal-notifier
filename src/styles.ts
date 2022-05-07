import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    paddingHorizontal: 70,
    justifyContent: 'center',
  },
  modalHeader: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
  closeButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  primaryButton: {
    backgroundColor: '#3a86ff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    top: 12,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  modalCloseIcon: {
    fontSize: 15,
  },
  modalView: {
    minHeight: 60,
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 19,
  },
  messageText: {
    textAlign: 'center',
    fontSize: 17,
  },
});
