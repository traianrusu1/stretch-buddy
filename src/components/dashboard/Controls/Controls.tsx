/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Button, InputNumber } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import styles from './Controls.module.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sound = require('../../../assets/sounds/pristine.mp3');
// import '../../../assets/sounds/pristine.mp3';

// interface Props {
//   myProp: string;
// }

const Controls: React.FC = () => {
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>();
  // const [countDown, setCountDown] = useState<number | undefined>();

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
    setTimer(setInterval(playSound, values.seconds || 5 * 1000));
  };

  const stop = (): void => {
    clearInterval(timer as any);
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
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Seconds"
          name="seconds"
          // rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <InputNumber min={1} max={10} defaultValue={3} />
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
        </Form.Item>
        <Button {...tailLayout} type="primary" htmlType="button" onClick={stop}>
          Stop
        </Button>
      </Form>
      {/* {countDown} */}
    </div>
  );
};

export default Controls;
