import { FocusEventHandler } from 'react';
import { FaSearch } from 'react-icons/fa'

type Props = {
  placeholder: string;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  labelText?: string;
}

export const SearchBox = ({ placeholder, onBlur, labelText }: Props): JSX.Element => {
  return (
    <div>
      <label htmlFor="searchBox" className='flex items-center rounded-2xl shadow-lg h-14'>
        <span className="mx-2"><FaSearch /></span>
        <input
          className="flex-1 h-full rounded-2xl focus:outline-none text-sm"  
          id="searchBox"
          type="search"
          placeholder={placeholder}
          onBlur={onBlur}
        />
      </label>
    </div>
  )
}