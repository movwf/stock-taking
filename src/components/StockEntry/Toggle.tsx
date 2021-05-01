import { memo } from 'react'
interface ToggleTypes {
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

function Toggle({ checked, setChecked }: ToggleTypes) {
  return (
    <div className="mt-3">
      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input
          type="checkbox"
          name="toggle"
          id="Mode"
          onChange={() => {
            setChecked(!checked)
          }}
          defaultChecked={checked}
          className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="Mode"
          className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <span className="text-gray-400 font-medium">
        {checked ? 'Manual' : 'Auto'}
      </span>
    </div>
  )
}

export default memo(Toggle)
