import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {
      name: 'Jan',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'Feb',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'Mar',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'Apr',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'May',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'Jun',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'Jul',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'Aug',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'Sep',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'Oct',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'Nov',
      Expense: 4000,
      Income: 2400,
    },
    {
      name: 'Dec',
      Expense: 4000,
      Income: 2400,
    },
  ]

export const DashboardCharts = () => {
  return (
    <div className=' xs:h-[22rem] xs:bg-white xs:p-4 xs:border xs:border-gray-200 xs:flex xs:flex-col xs:flex-1'>
        <strong>Charts</strong>
        <div className='xs:w-[50rem] xs:mt-3 xs:flex-1 xs:text-xs'>
            <ResponsiveContainer width="100%" height={200}>
            <BarChart width={500} height={400} data={data} margin={{top: 20, right: 10, bottom: 0, left: -10}}>
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Expense" fill="#0ea5e9"/>
                    <Bar dataKey="Income" fill="#ea588c"/>
            </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}
