import React from 'react';

import {
    Trophy, Users, Calendar, DollarSign, Bell,
    TrendingUp, Star, Shield, Target, Activity,
    ChevronRight, MessageSquare, Swords, Clock,
    ArrowUpRight, ArrowDownRight, Filter
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import HeaderPreLogin from "@/app/_ui/HeaderPreLogin";

const UserDashboard = () => {

    const user = {
        name: "John Anderson",
        role: "Fight Manager",
        team: "Elite Fight Management",
        avatar: "/api/placeholder/64/64",
        notifications: 5,
        messages: 3
    };

    const quickStats = [
        {
            label: "Active Fighters",
            value: "12",
            trend: "+2",
            trendUp: true,
            icon: Users
        },
        {
            label: "Upcoming Events",
            value: "4",
            trend: "+1",
            trendUp: true,
            icon: Calendar
        },
        {
            label: "Total Revenue",
            value: "$45.2K",
            trend: "+12.5%",
            trendUp: true,
            icon: DollarSign
        },
        {
            label: "Win Rate",
            value: "75%",
            trend: "-3%",
            trendUp: false,
            icon: TrendingUp
        }
    ];

    const upcomingEvents = [
        {
            title: "Elite FC 160",
            date: "Dec 20, 2024",
            location: "Miami, FL",
            fighters: 3,
            status: "Confirmed"
        },
        {
            title: "Fight Night Series",
            date: "Dec 28, 2024",
            location: "Las Vegas, NV",
            fighters: 2,
            status: "Pending"
        }
    ];

    const activeFighters = [
        {
            name: "Alex Silva",
            status: "Fight Ready",
            nextFight: "Dec 20, 2024",
            record: "15-2-0",
            image: "/api/placeholder/64/64",
            weightClass: "Lightweight"
        },
        {
            name: "Sarah Martinez",
            status: "In Training",
            nextFight: "Jan 15, 2025",
            record: "12-0-0",
            image: "/api/placeholder/64/64",
            weightClass: "Bantamweight"
        },
        {
            name: "Mike Johnson",
            status: "Recovery",
            nextFight: "TBD",
            record: "8-1-0",
            image: "/api/placeholder/64/64",
            weightClass: "Welterweight"
        }
    ];

    const recentActivity = [
        {
            type: "Contract",
            description: "New fight contract for Alex Silva",
            time: "2 hours ago",
            icon: Shield
        },
        {
            type: "Event",
            description: "Elite FC 160 registration confirmed",
            time: "5 hours ago",
            icon: Calendar
        },
        {
            type: "Fighter",
            description: "Sarah Martinez completed medical clearance",
            time: "1 day ago",
            icon: Activity
        }
    ];

    return (
        <>
            <HeaderPreLogin/>
            <div className="bg-zinc-900 min-h-screen pt-40 pb-20 px-5">
                <div className="max-w-[1800px] mx-auto">
                    {/* Dashboard Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="w-16 h-16 border-2 border-red-500">
                                <AvatarImage src={user.avatar}/>
                                <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Welcome back, {user.name}</h1>
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <span>{user.role}</span>
                                    <span>•</span>
                                    <span>{user.team}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="border-zinc-800 text-zinc-100">
                                <Filter className="w-4 h-4 mr-2"/>
                                Filters
                            </Button>
                            <Button className="bg-red-500 hover:bg-red-600">
                                <Swords className="w-4 h-4 mr-2"/>
                                New Event
                            </Button>
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {quickStats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/40 transition-all"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 text-zinc-400 mb-2">
                                            <stat.icon className="w-4 h-4"/>
                                            <span>{stat.label}</span>
                                        </div>
                                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                                    </div>
                                    <Badge
                                        className={`${
                                            stat.trendUp
                                                ? "bg-green-500/10 text-green-400 border-green-500/20"
                                                : "bg-red-500/10 text-red-400 border-red-500/20"
                                        }`}
                                    >
                                        {stat.trendUp ? <ArrowUpRight className="w-3 h-3 mr-1"/> :
                                            <ArrowDownRight className="w-3 h-3 mr-1"/>}
                                        {stat.trend}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Active Fighters */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-semibold text-white">Active Fighters</h2>
                                    <Button variant="ghost" className="text-zinc-400 hover:text-white">
                                        View All
                                        <ChevronRight className="w-4 h-4 ml-1"/>
                                    </Button>
                                </div>
                                <div className="space-y-4">
                                    {activeFighters.map((fighter, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-4 bg-zinc-800/40 rounded-lg hover:bg-zinc-800/60 transition-all"
                                        >
                                            <div className="flex items-center gap-4">
                                                <Avatar className="w-12 h-12 border-2 border-zinc-700">
                                                    <AvatarImage src={fighter.image}/>
                                                    <AvatarFallback>{fighter.name[0]}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h3 className="font-medium text-white">{fighter.name}</h3>
                                                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                                                        <span>{fighter.weightClass}</span>
                                                        <span>•</span>
                                                        <span>{fighter.record}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <Badge
                                                    className={
                                                        fighter.status === "Fight Ready"
                                                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                                                            : fighter.status === "In Training"
                                                                ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                                                                : "bg-red-500/10 text-red-400 border-red-500/20"
                                                    }
                                                >
                                                    {fighter.status}
                                                </Badge>
                                                <div className="text-sm text-zinc-400 mt-1">
                                                    Next Fight: {fighter.nextFight}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Upcoming Events */}
                            <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-semibold text-white">Upcoming Events</h2>
                                    <Button variant="ghost" className="text-zinc-400 hover:text-white">
                                        View Calendar
                                        <Calendar className="w-4 h-4 ml-2"/>
                                    </Button>
                                </div>
                                <div className="space-y-4">
                                    {upcomingEvents.map((event, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-4 bg-zinc-800/40 rounded-lg hover:bg-zinc-800/60 transition-all"
                                        >
                                            <div>
                                                <h3 className="font-medium text-white">{event.title}</h3>
                                                <div className="flex items-center gap-2 text-sm text-zinc-400">
                                                    <Calendar className="w-4 h-4"/>
                                                    <span>{event.date}</span>
                                                    <span>•</span>
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <Badge
                                                    className={
                                                        event.status === "Confirmed"
                                                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                                                            : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                                                    }
                                                >
                                                    {event.status}
                                                </Badge>
                                                <div className="text-sm text-zinc-400 mt-1">
                                                    {event.fighters} fighters registered
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Activity & Tasks */}
                        <div className="space-y-8">
                            {/* Recent Activity */}
                            <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
                                <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
                                <div className="space-y-6">
                                    {recentActivity.map((activity, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="p-2 bg-zinc-800/60 rounded-lg">
                                                <activity.icon className="w-4 h-4 text-red-500"/>
                                            </div>
                                            <div>
                                                <p className="text-zinc-100">{activity.description}</p>
                                                <p className="text-sm text-zinc-400 mt-1">{activity.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Notifications */}
                            <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-semibold text-white">Notifications</h2>
                                    <Badge className="bg-red-500 text-white border-0">
                                        {user.notifications} new
                                    </Badge>
                                </div>
                                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">
                                    View All Notifications
                                    <Bell className="w-4 h-4 ml-2"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;