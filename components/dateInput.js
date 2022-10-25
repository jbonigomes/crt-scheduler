import Input from '/components/input'

export default ({
  day,
  month,
  year,
  hour,
  minute,
  onDay,
  onMonth,
  onYear,
  onHour,
  onMinute,
}) => (
  <div className="flex items-center">
    <div className="w-16">
      <Input
        center
        max="2"
        value={day}
        pattern="[0-9]+"
        onChange={onDay}
        placeholder="DD"
      />
    </div>
    <div className="text-center w-6 -mt-3 text-gray-400">/</div>
    <div className="w-16">
      <Input
        center
        max="2"
        value={month}
        pattern="[0-9]+"
        onChange={onMonth}
        placeholder="MM"
      />
    </div>
    <div className="text-center w-6 -mt-3 text-gray-400">/</div>
    <div className="w-20">
      <Input
        center
        max="4"
        value={year}
        pattern="[0-9]+"
        onChange={onYear}
        placeholder="YYYY"
      />
    </div>
  </div>
)
