import Input from '/components/input'
import Layout from '/components/layout'
import Checkbox from '/components/checkbox'
import DateInput from '/components/dateInput'
import TimeInput from '/components/timeInput'

export default ({
  children,
  step,
  search,
  onSearch,
  pacientes,
  searchFilter,
  onSelect,
  selected,
  onReSelect,
  day,
  year,
  month,
  onDay,
  onYear,
  onMonth,
  startHour,
  startMinute,
  onStartHour,
  onStartMinute,
  endHour,
  endMinute,
  onEndHour,
  onEndMinute,
}) => (
  <Layout>
    <div className="max-w-lg mx-auto px-3">
      {step === 1 ? (
        <div className="mt-3">
          <Input placeholder="Procurar" value={search} onChange={onSearch} />
          {pacientes.filter(searchFilter).map(({ id, nome }) => (
            <Checkbox
              key={id}
              label={nome}
              onSelect={onSelect(id)}
              selected={selected === id}
            />
          ))}
        </div>
      ) : (
        <div className="mt-3">
          <Checkbox
            selected
            onSelect={onReSelect}
            label={pacientes?.find(({ id }) => id === selected)?.nome}
          />
          <div>
            <label className="mt-5 mb-1 block">Dia:</label>
            <DateInput
              day={day}
              year={year}
              month={month}
              onDay={onDay}
              onYear={onYear}
              onMonth={onMonth}
            />
          </div>
          <div>
            <label className="mt-2 mb-1 block">Das:</label>
            <TimeInput
              hour={startHour}
              minute={startMinute}
              onHour={onStartHour}
              onMinute={onStartMinute}
            />
          </div>
          <div className="pb-5">
            <label className="mt-2 mb-1 block">Ate:</label>
            <TimeInput
              hour={endHour}
              minute={endMinute}
              onHour={onEndHour}
              onMinute={onEndMinute}
            />
          </div>
          {children}
        </div>
      )}
    </div>
  </Layout>
)
