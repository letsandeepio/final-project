import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function (props) {
  const [question, setQuestion] = useState(props.question);

  const menuItems = props.questions.map((obj) => (
    <MenuItem value={obj.question}>{obj.question}</MenuItem>
  ));

  return (
    <div>
      <FormControl>
        <Select
          className='category-dropdown'
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            props.onChange(e.target.value);
          }}
        >
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
}
