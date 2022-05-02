import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    paddingHorizontal: 80,
    justifyContent: 'center',
  },
  modalHeader: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
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
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  modalView: {
    flex: 0.2,
    flexDirection: 'column',
    borderRadius: 20,
    justifyContent: 'center',
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 20,
  },
  modalText: {
    textAlign: 'center',
  },
});
