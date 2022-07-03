import {FC} from 'react'
import { isMobile } from 'react-device-detect';
import {FiChevronDown} from 'react-icons/fi';
import ReactSelect, { components, StylesConfig, DropdownIndicatorProps  } from 'react-select'

type SelectValue = {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectValue[];
  onChange: (e: unknown) => void;
  value: SelectValue | unknown;
  name: string;
}

export const Select: FC<SelectProps> = ({name, options, value, onChange}) => {

  const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <FiChevronDown />
      </components.DropdownIndicator>
    );
  };

  const selectStyle: StylesConfig = {
    option: (provided, state) => ({
      ...provided,
      '&:active': { backgroundColor: 'rgba(0,0,0, 0.1)'},
      backgroundColor: state.isSelected ? 'var(--color-primary) !important;'  : state.isFocused ? '#f2f2f2' : 'var(--color-white)',
      color: state.isSelected ? 'var(--color-white)' : '#000',
      fontWeight: state.isSelected ? 400 : 400,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      fontSize: 20,
      color: '#000'
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

  return (
    <ReactSelect
      name={name}
      menuPlacement={isMobile ? 'top' : 'auto'}
      instanceId="select"
      options={options}
      styles={selectStyle}
      value={value}
      onChange={e => onChange(e)}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: DropdownIndicator
      }}
    />
  )
}
