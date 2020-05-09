/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Button, InputNumber } from 'antd';
import { Store } from 'antd/lib/form/interface';
import NoSleep from 'nosleep.js';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import styles from './Controls.module.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sound = require('../../../assets/sounds/pristine.mp3');
// const  NoSleep = require('nosleep.js');

// import '../../../assets/sounds/pristine.mp3';

// interface Props {
//   myProp: string;
// }

const Controls: React.FC = () => {
  const [timer] = useState<NodeJS.Timeout | undefined>();
  const [countDownTime, setCountDownTime] = useState<number>(0);
  const [countDownTimer, setCountDownTimer] = useState<NodeJS.Timeout | undefined>();
  const noSleep = new NoSleep();

  // const audio = new Audio('/src/assets/sounds/pristine.mp3');
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    wrapperCol: { span: 14, offset: 4 },
  };

  const playSound = (): void => {
    const soundPromise = new Audio(sound).play();
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

  const start = (values: Store): void => {
    playSound();
    setCountDownTime(values.seconds);
    noSleep.enable();
    setCountDownTimer(
      setInterval(() => {
        setCountDownTime((prevVal: number) => {
          if (prevVal === 1) {
            playSound();
            return values.seconds;
          }
          return prevVal - 1;
        });
      }, 1000),
    );
    // setTimer(setInterval(playSound, values.seconds * 1000));
  };

  const stop = (): void => {
    clearInterval(timer as any);
    clearInterval(countDownTimer as any);
  };

  const onFinish = (values: Store): void => {
    console.log('Success:', values);
    start(values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.controls}>
      <Form
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...layout}
        name="basic"
        initialValues={{ seconds: 10 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Seconds"
          name="seconds"
          // rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <InputNumber min={1} />
        </Form.Item>
        {/* <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item> */}
        <Form.Item>
          <Button {...tailLayout} type="primary" htmlType="submit">
            Start
          </Button>{' '}
          <Button {...tailLayout} type="primary" htmlType="button" onClick={stop}>
            Stop
          </Button>
        </Form.Item>
      </Form>
      <div className={styles.timeDisplay}>{countDownTime}</div>
    </div>
  );
};

export default Controls;
