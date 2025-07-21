import React, { useState } from 'react';
import styled from 'styled-components';
import { format, startOfMonth, endOfMonth, startOfWeek, addDays, isSameMonth, isSameDay, setMonth, setYear } from 'date-fns';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const events: Record<string, string[]> = {
    '2023-06-08': ['Surgery'],
    '2023-06-10': ['Evaluation'],
    '2023-06-11': ['Polyclinic'],
    '2023-06-13': ['Surgery'],
    '2023-06-16': ['Polyclinic'],
    '2023-06-21': ['Surgery'],
    '2023-06-22': ['Polyclinic', 'Surgery'],
    '2023-06-23': ['Evaluation'],
    '2023-06-24': ['Polyclinic'],
    '2023-06-25': ['Surgery'],
    '2023-06-29': ['Polyclinic', 'Evaluation']
};

const CalendarWrapper = styled.div`
  width: 340px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;    
  font-family: sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 0.5px solid #cdcbcb;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const SelectorGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Selector = styled.select`
  border: none;
  font-size: 14px;
  font-weight: 600;
  background: transparent;
  cursor: pointer;
`;

const Legend = styled.div`
  display: flex;
  gap: 12px;
  font-size: 12px;
  margin: 12px 0;
  border-bottom: 1px solid gray;
  padding-bottom: 15px;
`;

const Dot = styled.span<{ color: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 4px;
    
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-bottom: 4px;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const   DayCell = styled.div<{ selected?: boolean; faded?: boolean }>`
  width: 36px;
  height: 36px;
  text-align: center;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? '#2563EB' : 'transparent')};
  color: ${({ selected, faded }) => (selected ? '#fff' : faded ? '#d1d5db' : '#111827')};
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#1D4ED8' : '#f3f4f6')};
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-top: 2px;
`;

const Calendar: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });

    const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);
    const months = Array.from({ length: 12 }, (_, i) => format(setMonth(new Date(), i), 'MMMM'));

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentMonth(setMonth(currentMonth, parseInt(e.target.value)));
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentMonth(setYear(currentMonth, parseInt(e.target.value)));
    };

    const renderDays = () => {
        const days = [];
        let day = startDate;

        while (day <= monthEnd || days.length % 7 !== 0) {
            const formattedDate = format(day, 'yyyy-MM-dd');
            const dayNumber = day.getDate();
            const isFaded = !isSameMonth(day, currentMonth);
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            const evts = events[formattedDate] || [];

            days.push(
                <DayCell
                    key={formattedDate}
                    onClick={() => setSelectedDate(day)}
                    selected={!!isSelected}
                    faded={isFaded}
                >
                    {dayNumber}
                    {evts.length > 0 && (
                        <DotsWrapper>
                            {evts.map((type, idx) => (
                                <Dot
                                    key={idx}
                                    color={
                                        type === 'Surgery' ? '#DC2626 ' :
                                            type === 'Polyclinic' ? '#2563EB' :
                                                type === 'Evaluation' ? '#22C55E' : '#000'
                                    }
                                />
                            ))}
                        </DotsWrapper>
                    )}
                </DayCell>
            );

            day = addDays(day, 1);
        }

        return days;
    };

    return (
        <CalendarWrapper>
            <Header>
                <strong>{format(currentMonth, 'MMMM yyyy')}</strong>
                <SelectorGroup>
                    <Selector value={currentMonth.getMonth()} onChange={handleMonthChange}>
                        {months.map((month, idx) => (
                            <option key={idx} value={idx}>{month}</option>
                        ))}
                    </Selector>
                    <Selector value={currentMonth.getFullYear()} onChange={handleYearChange}>
                        {years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </Selector>
                </SelectorGroup>
            </Header>
            <Legend>
                <div><Dot color="#2563EB" /> Surgery</div>
                <div><Dot color="#DC2626" /> Polyclinic</div>
                <div><Dot color="#22C55E" /> Evaluation</div>
            </Legend>
            <WeekDays>
                {DAYS.map(day => <div key={day}>{day}</div>)}
            </WeekDays>
            <DaysGrid>{renderDays()}</DaysGrid>
        </CalendarWrapper>
    );
};

export default Calendar;
