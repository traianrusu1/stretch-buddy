/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { InputNumber, Select, Row, Col } from 'antd';
// import { Store } from 'antd/lib/form/interface';
// import { ValidateErrorEntity } from 'rc-field-form/lib/interface';s
import styles from './Controls.module.scss';
import Timer from '../Timer';
import { Button, ButtonGroupQuad } from '../..';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const sound = require('../../../assets/sounds/pristine.mp3');
// const  NoSleep = require('nosleep.js');

// import '../../../assets/sounds/pristine.mp3';

// interface Props {
//   myProp: string;
// }

const Controls: React.FC = () => {
  const [seconds, setSeconds] = useState(60);
  const [timeInbetween, setTimeInbetween] = useState(10);
  const [timerSound, setTimerSound] = useState('beyond-doubt');
  const defaultSecondsValues = {
    30: 30,
    60: 60,
    90: 90,
    120: 120,
  };
  const defaulttimeInbetweenValues = {
    5: 5,
    10: 10,
    15: 15,
    20: 20,
  };

  // const [timer] = useState<NodeJS.Timeout | undefined>();
  // const [countDownTime, setCountDownTime] = useState<number>(0);
  // const [countDownTimer, setCountDownTimer] = useState<NodeJS.Timeout | undefined>();
  // const [sound, setSound] = useState<string>('');

  // const audio = new Audio('/src/assets/sounds/pristine.mp3');

  const playSound = (sound: string): void => {
    const mySound = require(`../../../assets/sounds/${sound}.mp3`);
    const soundPromise = new Audio(mySound).play();

    if (soundPromise !== undefined) {
      soundPromise
        .then((_) => {
          // Autoplay started!
        })
        .catch((err) => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          console.error(err);
        });
    }
  };

  // const start = (values: Store): void => {
  //   playSound(values.sound);
  //   setCountDownTime(values.seconds);
  //   noSleep.enable();
  //   setCountDownTimer(
  //     setInterval(() => {
  //       setCountDownTime((prevVal: number) => {
  //         if (prevVal === 1) {
  //           playSound(values.sound);
  //         }
  //         if (prevVal === 0) {
  //           return values.seconds - 1;
  //         }
  //         return prevVal - 1;
  //       });
  //     }, 1000),
  //   );
  //   // setTimer(setInterval(playSound, values.seconds * 1000));
  // };

  // const stop = (): void => {
  //   clearInterval(timer as any);
  //   clearInterval(countDownTimer as any);
  // };

  // const onFinish = (values: Store): void => {
  //   console.log('Success:', values);
  //   // start(values);
  // };

  // const onFinishFailed = (errorInfo: ValidateErrorEntity): void => {
  //   console.log('Failed:', errorInfo);
  // };

  const handleSoundChange = (value: string): void => {
    // debugger;
    // setSound(value);
    playSound(value);
    setTimerSound(value);
  };

  return (
    <div className={styles.controls}>
      <Row className={styles.bottomSpacer} justify="space-between">
        <Col>
          <Row>
            <ButtonGroupQuad myProp="temp">
              <Row justify="start" className={styles.quickButtonsContainer}>
                <Col>
                  <Button
                    selected={seconds === defaultSecondsValues[30]}
                    placement="tl"
                    onClick={(): void => setSeconds(defaultSecondsValues[30])}
                  >
                    {defaultSecondsValues[30]}
                  </Button>
                </Col>
                <Col>
                  <Button
                    placement="tr"
                    selected={seconds === defaultSecondsValues[60]}
                    // value={60}
                    // className={styles.quickButton}
                    // type="primary"
                    // shape="circle"
                    // size="large"
                    onClick={(): void => setSeconds(defaultSecondsValues[60])}
                  >
                    {defaultSecondsValues[60]}
                  </Button>
                </Col>
              </Row>
              <Row
                justify="start"
                className={[styles.quickButtonsContainer, styles.bottomSpacer].join(' ')}
              >
                <Col>
                  <Button
                    placement="bl"
                    selected={seconds === defaultSecondsValues[90]}
                    // value={90}
                    // className={styles.quickButton}
                    // type="primary"
                    // shape="circle"
                    // size="large"
                    onClick={(): void => setSeconds(defaultSecondsValues[90])}
                  >
                    {defaultSecondsValues[90]}
                  </Button>
                </Col>
                <Col>
                  <Button
                    onClick={(): void => setSeconds(defaultSecondsValues[120])}
                    placement="br"
                    selected={seconds === defaultSecondsValues[120]}
                  >
                    {defaultSecondsValues[120]}
                  </Button>
                </Col>
              </Row>
            </ButtonGroupQuad>
          </Row>
          <Row>
            <Col className={styles.inputContainer}>
              {/* <Form.Item
                label="Seconds"
                name="seconds"
                initialValue={seconds}

                // rules={[{ required: true, message: 'Please input your username!' }]}
              > */}
              Seconds
              <InputNumber min={1} value={seconds} onChange={(val): void => setSeconds(val || 0)} />
              {/* </Form.Item> */}
            </Col>
          </Row>
        </Col>
        {/* <Col span={4} /> */}
        <Col>
          <Row justify="start" className={styles.quickButtonsContainer}>
            <Col>
              <Button
                placement="tl"
                selected={timeInbetween === defaulttimeInbetweenValues[5]}
                // value={5}
                // className={styles.quickButton}
                // type="primary"
                // shape="circle"
                // size="large"
                onClick={(): void => setTimeInbetween(defaulttimeInbetweenValues[5])}
              >
                {defaulttimeInbetweenValues[5]}
              </Button>
            </Col>
            <Col>
              <Button
                placement="tr"
                selected={timeInbetween === defaulttimeInbetweenValues[10]}
                // value={10}
                // className={styles.quickButton}
                // type="primary"
                // shape="circle"
                // size="large"
                onClick={(): void => setTimeInbetween(defaulttimeInbetweenValues[10])}
              >
                {defaulttimeInbetweenValues[10]}
              </Button>
            </Col>
          </Row>
          <Row
            justify="start"
            className={[styles.quickButtonsContainer, styles.bottomSpacer].join(' ')}
          >
            <Col>
              <Button
                placement="bl"
                selected={timeInbetween === defaulttimeInbetweenValues[15]}
                // value={15}
                // className={styles.quickButton}
                // type="primary"
                // shape="circle"
                // size="large"
                onClick={(): void => setTimeInbetween(defaulttimeInbetweenValues[15])}
              >
                {defaulttimeInbetweenValues[15]}
              </Button>
            </Col>
            <Col>
              <Button
                placement="br"
                selected={timeInbetween === defaulttimeInbetweenValues[20]}
                // value={20}
                // className={styles.quickButton}
                // type="primary"
                // shape="circle"
                // size="large"
                onClick={(): void => setTimeInbetween(defaulttimeInbetweenValues[20])}
              >
                {defaulttimeInbetweenValues[20]}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className={styles.inputContainer}>
              {/* <Form.Item
                label="Time Inbetween"
                name="timeInbetween"
                initialValue={timeInbetween}
                // rules={[{ required: true, message: 'Please input your username!' }]}
              > */}
              Time Inbetween
              <InputNumber
                min={1}
                value={timeInbetween}
                onChange={(val): void => setTimeInbetween(val || 0)}
              />
              {/* </Form.Item> */}
            </Col>
          </Row>
        </Col>
      </Row>

      {/* <Form.Item label="Sound" name="sound" initialValue={timerSound}> */}
      <Row className={styles.bottomSpacer} justify="center">
        <Col
          className={[styles.inputContainer, styles.soundInput].join(' ')}
          // xs={20}
          // sm={18}
          // md={14}
          // lg={6}
          // xl={4}
        >
          Sound
          <Select value={timerSound} className={styles.soundInput} onChange={handleSoundChange}>
            <Select.Option value="beyond-doubt">beyond-doubt</Select.Option>
            <Select.Option value="bullfrog">bullfrog</Select.Option>
            <Select.Option value="clearly">clearly</Select.Option>
            <Select.Option value="deduction">deduction</Select.Option>
            <Select.Option value="horse-whinnies">horse-whinnies</Select.Option>
            <Select.Option value="insight">insight</Select.Option>
            <Select.Option value="just-like-magic">just-like-magic</Select.Option>
            <Select.Option value="just-saying">just-saying</Select.Option>
            <Select.Option value="open-up">open-up</Select.Option>
            <Select.Option value="pristine">pristine</Select.Option>
            <Select.Option value="sharp">sharp</Select.Option>
            <Select.Option value="that-was-quick">that-was-quick</Select.Option>
            <Select.Option value="to-the-point">to-the-point</Select.Option>
            <Select.Option value="unconvinced">unconvinced</Select.Option>
          </Select>
        </Col>
      </Row>

      {/* </Form.Item> */}
      <div>
        <Timer
          seconds={seconds}
          playSound={playSound}
          sound={timerSound}
          timeInbetween={timeInbetween}
        />
      </div>
      {/* <div className={styles.timeDisplay}>{countDownTime}</div> */}
    </div>
  );
};

export default Controls;
