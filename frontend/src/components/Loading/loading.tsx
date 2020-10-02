import React from "react";
import animationData from "assets/icons/loading.json";
import { Overlay, StyledLottie } from './styles';

export const Loading: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Overlay>
      <StyledLottie
        options={defaultOptions}
        height={50}
        width={50}
        isClickToPauseDisabled={false}
        isStopped={false}
      />
    </Overlay>
  );
};
