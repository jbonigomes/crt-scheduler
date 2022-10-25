import Input from '/components/input'

export default ({ hour, minute, onHour, onMinute }) => (
  <div className="flex items-center">
    <div className="w-16">
      <Input
        center
        max="2"
        value={hour}
        pattern="[0-9]+"
        onChange={onHour}
        placeholder="hh"
      />
    </div>
    <div className="text-center w-6 -mt-3 text-gray-400">:</div>
    <div className="w-16">
      <Input
        center
        max="2"
        value={minute}
        pattern="[0-9]+"
        onChange={onMinute}
        placeholder="mm"
      />
    </div>
  </div>
)
