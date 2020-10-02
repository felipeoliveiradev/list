import { IStore, IStoreContent } from "./interfaces";

import { LoadingStore } from "./loading/action";
import { UserStore } from "./user/action";

// import { OverlayStore } from "./overlay/action";


export const Store: IStore = (): IStoreContent => {
  const loadingStore = LoadingStore();
  const userStore = UserStore();
  // const overlayStore = OverlayStore();

  return {
    actions: {
      loadingAction: loadingStore.actions,
      userAction: userStore.actions  //#userAction
      // ,overlayAction: overlayStore.actions  //#overlayAction


    },
    state: {
      loading: loadingStore.state,
      user: userStore.state //#userActionState
      // ,overlay: overlayStore.state //#overlayActionState


    }
  };
};