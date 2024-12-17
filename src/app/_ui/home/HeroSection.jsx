"use client"

import React from 'react';

import {
    Trophy, Star, ArrowRight, ChevronRight, Shield,
    Swords, Users, Check, Play, Globe, Building2,
    Calendar, DollarSign, Filter, Briefcase, Award
} from 'lucide-react';

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";


const HeroSection = () => {
    const stats = [
        {label: "Active Fighters", value: "5,400+", icon: Users},
        {label: "Fight Clubs", value: "850+", icon: Building2},
        {label: "Events Hosted", value: "250+", icon: Trophy},
        {label: "Total Purse Value", value: "$2.5M+", icon: DollarSign}
    ];
    const featuredRosters = [
        {
            title: "Miami Fight Night",
            date: "Dec 15, 2024",
            style: "MMA",
            purse: "$50K",
            slots: 8,
            weightClass: "Lightweight",
            organization: "Elite Fighting Championship",
            image: "/api/placeholder/400/200",
            fighters: [
                {name: "Alex Silva", record: "15-2-0", style: "MMA", image: "/api/placeholder/64/64"},
                {name: "Mike Johnson", record: "13-1-0", style: "MMA", image: "/api/placeholder/64/64"}
            ]
        },
        {
            title: "London Boxing Series",
            date: "Dec 20, 2024",
            style: "Boxing",
            purse: "$75K",
            slots: 6,
            weightClass: "Welterweight",
            organization: "British Boxing Alliance",
            image: "/api/placeholder/400/200",
            fighters: [
                {name: "James Wilson", record: "20-0-0", style: "Boxing", image: "/api/placeholder/64/64"},
                {name: "Tom Harris", record: "18-2-0", style: "Boxing", image: "/api/placeholder/64/64"}
            ]
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-zinc-900 relative overflow-hidden pt-20  lg:pt-40 mt-5 no-scrollbar px-5  border-b border-b-zinc-800">
                {/* Background Elements - Adjusted to match header */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900"/>
                    <div
                        className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-950/20 rounded-full blur-[120px]"/>
                    <div
                        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px]"/>
                </div>

                {/* Main Content */}
                <div className="max-w-[1800px] mx-auto relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left Column - Main Content */}
                        <div className="space-y-8">
                            {/* Platform Tags */}
                            <div className="flex flex-wrap gap-3">
                                {['MMA', 'Boxing', 'Kickboxing', 'BKB', 'Muay Thai'].map((sport) => (
                                    <Badge
                                        key={sport}
                                        className="bg-red-500/10 text-red-400 hover:bg-red-500/20 border-red-500/20 cursor-pointer px-3 py-1.5"
                                    >
                                        {sport}
                                    </Badge>
                                ))}
                            </div>

                            {/* Main Title - Adjusted gradient */}
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                                    The Global Combat Sports
                                    <span
                                        className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
                  {" "}Marketplace
                </span>
                                </h1>
                                <p className="text-lg text-zinc-400 max-w-xl">
                                    Connect with fighters, clubs, and organizers worldwide. Find opportunities,
                                    organize events, and grow your combat sports career or business.
                                </p>
                            </div>

                            {/* User Types - Updated colors */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "For Fighters",
                                        description: "Find fights, build your fighter-profile, get discovered",
                                        icon: Users
                                    },
                                    {
                                        title: "For Clubs",
                                        description: "Manage rosters, organize events, grow your gym",
                                        icon: Building2
                                    },
                                    {
                                        title: "For Organizers",
                                        description: "Create events, find talent, sell tickets",
                                        icon: Calendar
                                    },
                                    {
                                        title: "For Sponsors",
                                        description: "Connect with athletes, support events",
                                        icon: Briefcase
                                    }
                                ].map((type, index) => (
                                    <div
                                        key={index}
                                        className="group bg-zinc-800/20 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 hover:bg-zinc-800/40 hover:border-red-500/20 transition-all cursor-pointer"
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div
                                                className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                                                <type.icon className="w-5 h-5 text-red-500"/>
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-white">{type.title}</h3>
                                                <p className="text-sm text-zinc-400">{type.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons - Matched to header style */}
                            <div className="flex items-center space-x-4">
                                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8">
                                    Join Platform
                                    <ArrowRight className="w-4 h-4 ml-2"/>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-zinc-800 text-zinc-100 bg-zinc-800"
                                >
                                    Explore Events
                                    <Trophy className="w-4 h-4 ml-2"/>
                                </Button>
                            </div>

                            {/* Platform Stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 mt-8 border-t border-zinc-800">
                                {stats.map((stat, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center space-x-2 text-zinc-400">
                                            <stat.icon className="w-4 h-4"/>
                                            <span className="text-sm">{stat.label}</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Active Rosters */}
                        <div className="space-y-6">
                            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">Active Fight Rosters</h2>
                                <Tabs defaultValue="all" className="w-auto">
                                    <TabsList className="bg-zinc-800/50">
                                        {['All', 'MMA', 'Boxing', 'BKB'].map((tab) => (
                                            <TabsTrigger
                                                key={tab}
                                                value={tab.toLowerCase()}
                                                className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                                            >
                                                {tab}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                </Tabs>
                            </div>

                            <div className="space-y-4">
                                {featuredRosters.map((roster, index) => (
                                    <div
                                        key={index}
                                        className="group bg-zinc-800/20 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/40 hover:border-red-500/20 transition-all"
                                    >
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <h3 className="text-lg font-semibold text-white">
                                                        {roster.title}
                                                    </h3>
                                                    <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                                                        {roster.style}
                                                    </Badge>
                                                </div>
                                                <p className="text-zinc-400 text-sm">{roster.organization}</p>
                                            </div>
                                            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                                                {roster.slots} slots left
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="space-y-1">
                                                <div className="text-sm text-zinc-500">Date</div>
                                                <div className="text-zinc-300">{roster.date}</div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-sm text-zinc-500">Weight Class</div>
                                                <div className="text-zinc-300">{roster.weightClass}</div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-sm text-zinc-500">Purse</div>
                                                <div className="text-zinc-300">{roster.purse}</div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-sm text-zinc-500">Style</div>
                                                <div className="text-zinc-300">{roster.style}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center -space-x-2">
                                                {roster.fighters.map((fighter, i) => (
                                                    <Avatar key={i} className="border-2 border-zinc-800 w-10 h-10">
                                                        <AvatarImage src={fighter.image}/>
                                                        <AvatarFallback>{fighter.name[0]}</AvatarFallback>
                                                    </Avatar>
                                                ))}
                                                <div
                                                    className="w-10 h-10 rounded-full bg-zinc-800/50 border-2 border-zinc-700 flex items-center justify-center ml-2">
                                                    <span className="text-zinc-400 text-sm">+{roster.slots}</span>
                                                </div>
                                            </div>
                                            <Button className="bg-red-500 text-white hover:bg-red-600">
                                                View Roster
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                                {/* View All Button */}
                                <Button
                                    variant="outline"
                                    className="w-full border-zinc-800 text-zinc-200 bg-zinc-800 mt-4"
                                >
                                    View All Active Rosters
                                    <ArrowRight className="w-4 h-4 ml-2"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;