import {FC} from 'react'
import { Controller, ControllerProps } from 'react-hook-form';
import {FiChevronDown} from 'react-icons/fi';
import ReactSelect, { components, StylesConfig, DropdownIndicatorProps  } from 'react-select'

type SelectValue = {
  label: string;
  value: string;
}

interface SelectProps {
  name: string;
  options: SelectValue[];
  control: any
}

export const Select: FC<SelectProps> = ({name, control, options}) => {

  const DropdownIndicator = (
    props: DropdownIndicatorProps
  ) => {
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
    <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <ReactSelect
              instanceId="select"
              options={options}
              styles={selectStyle}
              onChange={e => onChange(e)}
              defaultValue={options[0]}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: DropdownIndicator
              }}
              onBlur={onBlur}
            />
          );
        }}
      />
  )
}
