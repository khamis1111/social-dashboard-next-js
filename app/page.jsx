'use client'

import { useEffect, useState } from "react"

export default function Page() {
    const [mode, setMode] = useState(null)

    useEffect(() => {
        setMode(JSON.parse(localStorage.getItem('mode')))
    }, [])

    return (
        <div className={`${mode && 'dark'} dark:bg-slate-800`}>
            <nav className="bg-slate-100 dark:bg-gray-900 pb-28">
                <div className="container py-5 flex justify-between items-center flex-wrap">
                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold dark:text-white">Socal Media Dashboard</h1>
                        <p className="text-slate-500 dark:text-slate-400 font-bold">Total Followers: 1000</p>
                    </div>
                    <div>
                        <label htmlFor="mode" className="text-slate-500 dark:text-slate-400 font-bold cursor-pointer">
                            {mode ? 'Dark Mode' : 'Light Mode'}
                        </label>
                        <input type="checkbox" name="mode" id="mode" hidden checked={mode} onChange={(e) => {
                            setMode(e.target.checked)
                            localStorage.setItem('mode', e.target.checked)
                        }} />
                    </div>
                </div>
            </nav>
            <div className="container py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 -mt-24">
                    {
                        [
                            'before:bg-gradient-to-r from-cyan-500 to-blue-500',
                            'before:bg-gradient-to-r from-red-500 to-blue-500',
                            'before:bg-gradient-to-r from-sky-800 to-blue-500',
                            'before:bg-gradient-to-r from-green-500 to-green-800'
                        ].map((color, index) => (
                            <div key={index} className={`followersCard ${color} dark:text-white`}>
                                <p>@Khamis</p>
                                <div className="py-5">
                                    <h1 className="text-6xl font-bold">1987</h1>
                                    <p className="uppercase tracking-[0.3rem] text-slate-500 dark:text-slate-400">Followers</p>
                                </div>
                                <p className="text-green-500">12 Today</p>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-16 font-bold">
                    <h1 className="text-2xl md:text-3xl lg:text-3xl text-gray-500 dark:text-white">Overview - Today</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                        {
                            Array(8).fill('').map((_, index) => (
                                <div key={index} className="followersCard dark:text-white">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-slate-500 dark:text-slate-400 text-start">Page Views</p>
                                        <p>@Khamis</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-2xl">11K</p>
                                        <p className="text-green-500">3%</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}