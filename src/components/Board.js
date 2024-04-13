import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";

import "../index.css";

import Scene from "./Scene";
import { registerListener } from "../utils/utils";

import { setX, initX } from "../redux/ducks/xDuck";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const sceneContainer = useRef();
  const webcamRef = useRef();
  const [size, setSize] = useState();

  useEffect(() => {
    const onResize = () => {
      const { width, height } = sceneContainer.current.getBoundingClientRect();
      setSize({ width, height });
    };
    const unregisterResizeListener = registerListener("resize", onResize);
    onResize();
    return unregisterResizeListener;

    const x = 3;
    dispatch(setX, x);
  }, []);

  // if (
  //   typeof webcamRef.current !== "undefined" &&
  //   webcamRef.current !== null &&
  //   webcamRef.current.video.readyState === 4
  // ) {
  //   //Ottieni le proprietà video
  //   const video = webcamRef.current.video;
  //   const videoWidth = webcamRef.current.video.videoWidth;
  //   const videoHeight = webcamRef.current.video.videoHeight;

  //   //Applicale forzandole alla dimensione video per farla funzionare
  //   webcamRef.current.video.width = videoWidth;
  //   webcamRef.current.video.height = videoHeight;

  //   // //Applicale anche al canvas
  //   // canvasRef.current.width = videoWidth;
  //   // canvasRef.current.height = videoHeight;

  //   //Traccia i movimenti
  //   // const hand = await net.estimateHands(video);
  //   // indexFinger = hand[0]?.landmarks[8][0];
  //   // console.log(indexFinger);
  // }

  return (
    <div className="page">
      <div className="webcam-container" ref={webcamRef}>
        {size && <Webcam width={size.width} height={size.height} />}
      </div>
      <div className="scene-container" ref={sceneContainer}>
        {size && <Scene width={size.width} height={size.height} />}
      </div>
    </div>
  );
};
