import React, { useState, useCallback, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import EasyTimer from 'easytimer.js';
import styles from './Timer.module.scss';

interface Props {
  seconds: number;
  timeInbetween: number;
  sound: string;
  playSound: Function;
}
const timer = new EasyTimer();
const timerTimeInbetween = new EasyTimer();

const Timer: React.FC<Props> = ({ seconds, timeInbetween, sound, playSound }: Props) => {
  const [time, setTime] = useState('');

  // timer.start(/* config */);
  const handleStart = (): void => {
    console.log('TIMER Start');
    timer.start({ countdown: true, startValues: { seconds } });
  };
  const handleStop = (): void => {
    console.log('TIMER Stop');
    timer.pause();
  };

  const handleTargetAchieved = useCallback((): void => {
    playSound(sound);
    timerTimeInbetween.start({ countdown: true, startValues: { seconds: timeInbetween } });
  }, [playSound, sound, timeInbetween]);

  const handleTargetAchievedForInbetween = useCallback((): void => {
    timer.reset();
  }, []);

  const handleSecondsUpdated = useCallback((): void => {
    setTime(timer.getTimeValues().toString());
  }, []);

  useEffect(() => {
    timer.addEventListener('targetAchieved', handleTargetAchieved);

    return (): void => {
      timer.removeEventListener('targetAchieved', handleTargetAchieved);
    };
  }, [handleTargetAchieved]);

  useEffect(() => {
    timer.addEventListener('secondsUpdated', handleSecondsUpdated);
    return (): void => {
      timer.removeEventListener('secondsUpdated', handleSecondsUpdated);
    };
  }, [handleSecondsUpdated]);

  useEffect(() => {
    timerTimeInbetween.addEventListener('targetAchieved', handleTargetAchievedForInbetween);
    return (): void => {
      timerTimeInbetween.removeEventListener('targetAchieved', handleTargetAchievedForInbetween);
    };
  }, [handleTargetAchievedForInbetween]);

  return (
    <div className={styles.timer}>
      <Row className={styles.buttons}>
        <Col span={12}>
          <Button
            type="primary"
            htmlType="button"
            size="large"
            onClick={handleStart}
            className={styles.bigButtons}
          >
            Start
          </Button>
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            danger
            htmlType="button"
            size="large"
            onClick={handleStop}
            className={styles.bigButtons}
          >
            Stop
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>{time}</Col>
      </Row>
    </div>
  );
};

export default Timer;
