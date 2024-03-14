import { Input } from '@alifd/next';
import { useUnmount } from 'ahooks';
import React from 'react';

export default function CustomInput(props) {
  // eslint-disable-next-line react/prop-types
  const { field, name, onChange } = props;
  useUnmount(() => {
    // eslint-disable-next-line react/prop-types
    field.remove(name);
  }, []);

  return (
    <>
      <Input name={name} onChange={onChange} />
    </>
  );
}
