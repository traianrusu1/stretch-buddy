/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Button, InputNumber, Select, Row, Col } from 'antd';
import { Store } from 'antd/lib/form/interface';
import NoSleep from 'nosleep.js';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import styles from './Controls.module.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const sound = require('../../../assets/sounds/pristine.mp3');
// const  NoSleep = require('nosleep.js');

// import '../../../assets/sounds/pristine.mp3';

// interface Props {
//   myProp: string;
// }

const Controls: React.FC = () => {
  const [timer] = useState<NodeJS.Timeout | undefined>();
  const [countDownTime, setCountDownTime] = useState<number>(0);
  const [countDownTimer, setCountDownTimer] = useState<NodeJS.Timeout | undefined>();
  // const [sound, setSound] = useState<string>('');
  const noSleep = new NoSleep();

  // const audio = new Audio('/src/assets/sounds/pristine.mp3');
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    wrapperCol: { span: 14, offset: 4 },
  };

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

  const start = (values: Store): void => {
    playSound(values.sound);
    setCountDownTime(values.seconds);
    noSleep.enable();
    setCountDownTimer(
      setInterval(() => {
        setCountDownTime((prevVal: number) => {
          if (prevVal === 1) {
            playSound(values.sound);
          }
          if (prevVal === 0) {
            return values.seconds - 1;
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

  const handleSoundChange = (value: string): void => {
    // debugger;
    // setSound(value);
    playSound(value);
  };

  return (
    <div className={styles.controls}>
      <Form
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...layout}
        name="basic"
        initialValues={{ seconds: 10, sound: 'beyond-doubt', timeInbetween: 10 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size="large"
        layout="horizontal"
      >
        <Row>
          <Col span={12}>
            <Form.Item
              label="Seconds"
              name="seconds"
              // rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <InputNumber min={1} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Time Inbetween"
              name="timeInbetween"
              // rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <InputNumber min={1} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Sound" name="sound">
          <Select onChange={handleSoundChange}>
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
        </Form.Item>
        {/* <Form.Item label="Switch">
          <Switch />
        </Form.Item> */}
        <Row className={styles.buttons}>
          <Col span={12}>
            <Button
              {...tailLayout}
              type="primary"
              htmlType="submit"
              size="large"
              className={styles.bigButtons}
            >
              Start
            </Button>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Button
                {...tailLayout}
                type="primary"
                danger
                htmlType="button"
                size="large"
                onClick={stop}
                className={styles.bigButtons}
              >
                Stop
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={styles.timeDisplay}>{countDownTime}</div>
    </div>
  );
};

export default Controls;
