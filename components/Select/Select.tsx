import { FC } from 'react'
import { ISelectValue } from '@/types/ISelectValue'
import ReactSelect, { StylesConfig } from 'react-select'

interface SelectProps {
  options: ISelectValue[];
  handleSelect: (value: string) => void;
}

export const Select: FC<SelectProps> = ({options, handleSelect}) => {

  const selectStyle: StylesConfig = {
    option: (provided, state) => ({
      ...provided,
      '&:active': { backgroundColor: 'rgba(0,0,0, 0.1)'},
      backgroundColor: state.isSelected ? 'var(--color-primary) !important;'  : state.isFocused ? '#f2f2f2' : '#fff',
      color: state.isSelected ? '#fff' : '#000',
      fontWeight: state.isSelected ? 400 : 400,
    }),
    control: base => ({
      ...base,
      fontSize: 15,
      lineHeight: '20px',
      fontWeight: 400,
      color: '#000',
      borderColor: 'rgba(0,0,0, 0.3)',
      '&:hover': { borderColor: 'rgba(0,0,0, 0.4)' },
      border: '1px solid lightgray',
      boxShadow: 'none',
    })
  };

  const handleChange = ({value}: ISelectValue | any) => handleSelect(value)

  return (
    <ReactSelect
        instanceId="select"
        options={options}
        styles={selectStyle}
        onChange={handleChange}
        defaultValue={options[0]}
        components={{
          IndicatorSeparator: () => null
        }}
    />
  )
}
