import messaging from '@react-native-firebase/messaging';

const TOPIC = 'test';

const requestUserPermission = async () => {
  //On ios,checking permission before sending and receiving messages
  const authStatus = await messaging().requestPermission();
  return (
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  );
};
const getFcmToken = () => {
  // Returns an FCM token for this device
  messaging()
    .getToken()
    .then((fcmToken) => {
      console.log('FCM Token -> ', fcmToken);
    });
};
const receiveNotificationFromQuitState = () => {
  messaging()
    .getInitialNotification()
    .then(async (remoteMessage) => {
      if (remoteMessage) {
        showToast('getInitialNotification:' + 'Notification caused app to open from quit state');
      }
    });
};
const receiveBackgroundNotification = () => {
  messaging().onNotificationOpenedApp(async (remoteMessage) => {
    if (remoteMessage) {
      showToast(
        'onNotificationOpenedApp: ' + 'Notification caused app to open from background state'
      );
    }
  });
};
//stop listening for new messages.
const unsubscribeDeviceTopic = messaging().onMessage(async (remoteMessage) => {
  showToast('New notification arrived' + JSON.stringify(remoteMessage));
});
const backgroundThread = () => {
  //It's called when the app is in the background or terminated
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    showToast('Background notification' + JSON.stringify(remoteMessage));
  });
};
const subscribeTopicToGetNotification = () => {
  /**
   * based on Topic, FCM server to send targeted
   * messages to only those devices subscribed to that topic
   */
  messaging()
    .subscribeToTopic(TOPIC)
    .then(() => {
      console.log(`Topic: ${TOPIC} Suscribed`);
    });
};
