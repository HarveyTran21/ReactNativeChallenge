/**
 *
 *
 * @format
 */

import React from 'react'
import {AppFlow} from '@app/navigation'
import {setContext} from '@apollo/client/link/context'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client'
import Config from 'react-native-config'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Provider} from 'react-redux'
import {store} from '@app/states'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import {getAccessToken} from '@app/utils'

const httpLink = new HttpLink({
  uri: Config.API_URL + '/graphql',
  fetch: fetch,
  credentials: 'include',
})

const authLink = setContext(async (_, {headers}) => {
  const bearerToken = await getAccessToken()

  return {
    headers: {
      ...headers,
      authorization: bearerToken ? `Bearer ${bearerToken}` : '',
    },
  }
})

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
})
const App = () => {
  const persistor = persistStore(store)
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppFlow />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  )
}

export default App
