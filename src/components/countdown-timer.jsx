"use client"

import { useEffect, useState } from "react"


export function CountdownTimer({ days }) {
  const [timeLeft, setTimeLeft] = useState({
    days: days,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer)
          return prev
        }

        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours
        let newDays = prev.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }
        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }
        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="flex-1 min-w-[120px] p-4 rounded-lg bg-white border border-gray-200 shadow-lg">
          <span className="block text-3xl font-bold text-gray-900">{item.value}</span>
          <span className="text-sm font-medium text-gray-600">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

