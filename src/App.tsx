import React from 'react';
import Routes from './routes';
import * as UiContext from './contexts/ui';
import * as UserContext from './contexts/user';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper'
import {store} from './app/store';

export default function App() {
  const [applicationState, setApplicationState] = React.useState(
    UiContext.createApplicationInitialState(),
  );
  const [userState, setUserState] = React.useState(
    UserContext.createInitialState(),
  );
  return (
    <Provider store={store}>
      <PaperProvider>
      <SafeAreaProvider>
        <UiContext.Context.Provider
          value={{applicationState, setApplicationState}}>
          <UserContext.Context.Provider value={{userState, setUserState}}>
            <Routes />
          </UserContext.Context.Provider>
        </UiContext.Context.Provider>
        {/* <NetworkContext.Context.Provider value={{networkState, dispatchNetworkActions}}></NetworkContex.Context.Provider> */}
      </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}
