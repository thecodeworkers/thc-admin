import React from "react";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const Loading = (props) => {
  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return <BeatLoader size={30} css={override} color={props.color} />;
};

export default Loading;
