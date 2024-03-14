import { Tab, Form, Input, Field, Button } from '@alifd/next';
import '@alifd/next/lib/tab/index.css';
import React, { useEffect } from 'react';
import CustomInput from './CustomInput';

export default function FormExample() {
  const field = Field.useField();
  useEffect(() => {
    field.setValues({
      username: 'momo',
    });
  }, [field]);
  return (
    <>
      <Form field={field}>
        <Tab lazyload={false}>
          <Tab.Item key={1} title={'Tab1'}>
            <div>
              <Form.Item
                label={'姓名'}
                required
                validator={(rule, value, cb) => {
                  if (!value) {
                    return cb('failed');
                  }
                  return cb();
                }}
              >
                <Input name={'username'} />
              </Form.Item>
              <Form.Item label={'年龄'}>
                <Input
                  {...field.init('age', {
                    initValue: '12',
                    rules: {
                      required: true,
                      pattern: /^[0-9]+$/,
                      message: '校验失败',
                    },
                  })}
                />
              </Form.Item>
              <Form.Item
                label={'兴趣'}
                required
                validator={(rule, value, cb) => {
                  if (!value) {
                    return cb('failed');
                  }
                  return cb();
                }}
              >
                <CustomInput name={'interest'} field={field} />
              </Form.Item>
            </div>
          </Tab.Item>
        </Tab>
      </Form>
      <Button
        onClick={() => {
          field.validate(function (errors, values) {
            if (errors) {
              console.error('sorry, find errors');
            }
          });
        }}
      >
        Submit
      </Button>
    </>
  );
}
