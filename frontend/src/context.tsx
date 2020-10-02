import { IStore, IStoreContent } from "./store/interfaces";
import React, { createContext } from "react";
import {
  defaultActions as loadingDefaultActions,
  defaultState as loadingDefaultState,
} from "store/loading/action";
import { defaultActions as userDefaultActions, defaultState as userDefaultState } from "store/user/action";

import { Store } from "./store";

// import { defaultActions as overlayDefaultActions, defaultState as overlayDefaultState } from "store/overlay/action";




interface IProviderProps {
  children: JSX.Element;
}

const ContextStore = (useValue: IStore) => {
  const Context = createContext<IStoreContent>({
    state: {
      loading: loadingDefaultState,
      user: userDefaultState,
      // overlay: overlayDefaultState //#overlayDefaultState
    },
    actions: {
      loadingAction: loadingDefaultActions,
      userAction: userDefaultActions,
      // overlayAction: overlayDefaultActions
    }
  });

  const Provider = (props: IProviderProps) => {
    const value = useValue();
    const { children } = props;
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return {
    Context,
    Provider
  };
};

export const AppContext = ContextStore(Store);