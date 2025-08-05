import {
  configureStore, type Middleware, type Action,
  type MiddlewareAPI, type Dispatch
} from '@reduxjs/toolkit'
import counterReducer from './reducer'
import type { RootState } from './types'

const logger: Middleware = (storeApi: MiddlewareAPI<Dispatch, RootState>) => (next) => (action) => {
  const prevState = storeApi.getState().counter.count
  const result = next(action)
  const nextState = storeApi.getState().counter.count
  console.log(`
    Prev State: ${prevState}
      Dispatch action: ${(action as Action).type}
        NextState: ${nextState}
    `)
  return result
}

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store