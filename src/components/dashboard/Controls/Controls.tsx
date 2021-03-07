/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Select, Row, Col, Slider } from 'antd';
import { SliderValue } from 'antd/lib/slider';
import styles from './Controls.module.scss';
import Timer from '../Timer';
import { Button, ButtonGroupQuad } from '../..';

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

  const playSound = (sound: string): void => {
    const mySound = require(`../../../assets/sounds/${sound}.mp3`);
    const soundPromise = new Audio(mySound).play();

    if (soundPromise !== undefined) {
      soundPromise
        .then((_) => {})
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleSoundChange = (value: string): void => {
    playSound(value);
    setTimerSound(value);
  };

  return (
    <div className={styles.controls}>
      <Row className={styles.bottomSpacerSmall} justify="space-around">
        <Col className={styles.heading}>Main</Col>
        <Col className={styles.heading}>Rest</Col>
      </Row>

      <Row className={styles.bottomSpacer} justify="space-around">
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
            <Col flex={1}>
              <Slider
                step={10}
                defaultValue={defaultSecondsValues[60]}
                min={10}
                max={240}
                value={seconds}
                onChange={(value: SliderValue): void => setSeconds(value as number)}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="start" className={styles.quickButtonsContainer}>
            <Col>
              <Button
                placement="tl"
                selected={timeInbetween === defaulttimeInbetweenValues[5]}
                onClick={(): void => setTimeInbetween(defaulttimeInbetweenValues[5])}
              >
                {defaulttimeInbetweenValues[5]}
              </Button>
            </Col>
            <Col>
              <Button
                placement="tr"
                selected={timeInbetween === defaulttimeInbetweenValues[10]}
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
                onClick={(): void => setTimeInbetween(defaulttimeInbetweenValues[15])}
              >
                {defaulttimeInbetweenValues[15]}
              </Button>
            </Col>
            <Col>
              <Button
                placement="br"
                selected={timeInbetween === defaulttimeInbetweenValues[20]}
                onClick={(): void => setTimeInbetween(defaulttimeInbetweenValues[20])}
              >
                {defaulttimeInbetweenValues[20]}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col flex={1}>
              <Slider
                step={5}
                value={timeInbetween}
                onChange={(value: SliderValue): void => setTimeInbetween(value as number)}
                min={0}
                max={120}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={styles.bottomSpacer} justify="center">
        <Col className={[styles.inputContainer, styles.soundInput].join(' ')}>
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
      <div>
        <Timer
          seconds={seconds}
          playSound={playSound}
          sound={timerSound}
          timeInbetween={timeInbetween}
        />
      </div>
    </div>
  );
};

export default Controls;
