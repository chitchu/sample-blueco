import React from 'react';
import Section from 'rebass/dist/Section';
import Input from 'rebass/dist/Input';
import Radio from 'rebass/dist/Radio';
import Divider from 'rebass/dist/Divider';
import Text from 'rebass/dist/Text';

const Editor = (
  { title, unit, showWind, onTitleChange, onUnitChange, onShowWindChange }
) => {
  return (
    <Section mt={0} pt={0} mb={0} pb={0}>
      <Input
        label="Title"
        value={title}
        onChange={onTitleChange}
        name="widget-title"
      />
      <Divider />
      <Text bold={true}>Unit</Text>
      <Radio
        checked={unit === 'c'}
        circle
        label="C°"
        name="unit_value"
        readOnly
        onChange={() => onUnitChange('c')}
      />
      <Radio
        checked={unit === 'f'}
        circle
        label="F°"
        name="unit_value"
        readOnly
        onChange={() => onUnitChange('f')}
      />
      <Divider />
      <Text bold={true}>Wind</Text>
      <Radio
        checked={showWind}
        circle
        label="On"
        name="showwind_value"
        readOnly
        onChange={() => onShowWindChange(true)}
      />
      <Radio
        checked={!showWind}
        circle
        label="Off"
        name="showwind_value"
        readOnly
        onChange={() => onShowWindChange(false)}
      />
    </Section>
  );
};

export default Editor;
