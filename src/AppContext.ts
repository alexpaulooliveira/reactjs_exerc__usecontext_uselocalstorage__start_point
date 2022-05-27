import { createContext } from 'react';

export interface IAppContext {
                        lang:string, 
                        theme:string, 
                        auth:string
                      }

export const defaultAppContext = { 
                                   lang:'en', 
                                   theme:'dark', 
                                   auth:'off' 
                                 }

const AppContext = createContext({
  appContext: defaultAppContext,
  setAppContext: (value:IAppContext) => {}
});

export default AppContext;