'use client';

import React from 'react';

import {
    Calendar, MapPin, Users,
    ChevronRight, Filter, Ticket, Star,
    Trophy, Target, Heart, Share2,
    Play, Info, Shield, Timer
} from 'lucide-react';

import PageHeader from "@/app/(events)/events/_ui/PageHeader";
import QuickStats from "@/app/(events)/events/_ui/QuickStats";
import LeftColWrapper from "@/app/(events)/events/_ui/LeftColWrapper";
import RightColWrapper from "@/app/(events)/events/_ui/RightColWrapper";
import FeaturedEvents from "@/app/(events)/events/_ui/FeaturedEvents";
import UpcomingEvents from "@/app/(events)/events/_ui/UpcomingEvents";
import EventCategories from "@/app/(events)/events/_ui/EventCategories";
import EventUpdates from "@/app/(events)/events/_ui/EventUpdates";
import PriceCategories from "@/app/(events)/events/_ui/PriceCategories";
import HeaderPreLogin from "@/app/_ui/HeaderPreLogin";

const EventsPage = () => {

    const quickStats = [
        {
            label: "Live Events",
            value: "2",
            trend: "In Progress",
            trendUp: true,
            Icon: Play
        },
        {
            label: "This Month",
            value: "8",
            trend: "+2 vs last month",
            trendUp: true,
            Icon: Calendar
        },
        {
            label: "Open Predictions",
            value: "5",
            trend: "Closing Soon",
            trendUp: true,
            Icon: Target
        },
        {
            label: "Total Fights",
            value: "42",
            trend: "Next 30 days",
            trendUp: true,
            Icon: Trophy
        }
    ];
    const featuredEvents = [
        {
            title: "Elite FC 160",
            mainEvent: "Martinez vs. Thompson",
            date: "Dec 20, 2024",
            time: "10:00 PM EST",
            location: "Miami Arena, FL",
            status: "Upcoming",
            ticketStatus: "On Sale",
            matches: 12,
            predictions: "23.5K",
            attendance: "15.2K",
            image: "/api/placeholder/400/200",
            fighters: [
                {
                    name: "Sarah Martinez",
                    record: "12-0-0",
                    image: "/api/placeholder/64/64"
                },
                {
                    name: "Jessica Thompson",
                    record: "10-1-0",
                    image: "/api/placeholder/64/64"
                }
            ]
        },
        {
            title: "Fight Night Series",
            mainEvent: "Silva vs. Johnson",
            date: "Dec 28, 2024",
            time: "9:00 PM EST",
            location: "T-Mobile Arena, Las Vegas",
            status: "Predictions Open",
            ticketStatus: "Limited",
            matches: 10,
            predictions: "18.2K",
            attendance: "12.8K",
            image: "/api/placeholder/400/200",
            fighters: [
                {
                    name: "Alex Silva",
                    record: "15-2-0",
                    image: "/api/placeholder/64/64"
                },
                {
                    name: "Mike Johnson",
                    record: "14-1-0",
                    image: "/api/placeholder/64/64"
                }
            ]
        }
    ];
    const upcomingEvents = [
        {
            title: "Warrior's Challenge",
            mainEvent: "Rodriguez vs. Lee",
            date: "Jan 5, 2025",
            location: "Chicago, IL",
            status: "Early Bird",
            matches: 11,
            predictions: "12.1K"
        },
        {
            title: "Elite FC 161",
            mainEvent: "Zhang vs. Anderson",
            date: "Jan 15, 2025",
            location: "Los Angeles, CA",
            status: "Announced",
            matches: 12,
            predictions: "8.5K"
        },
        {
            title: "Championship Series",
            mainEvent: "Brown vs. Wilson",
            date: "Jan 28, 2025",
            location: "Houston, TX",
            status: "Registration Open",
            matches: 10,
            predictions: "5.2K"
        }
    ];
    const eventHighlights = [
        {
            type: "Announcement",
            description: "New main event confirmed for Elite FC 160",
            time: "2 hours ago",
            Icon: Info
        },
        {
            type: "Update",
            description: "Early bird tickets now available for Warrior's Challenge",
            time: "5 hours ago",
            Icon: Ticket
        },
        {
            type: "Alert",
            description: "Limited tickets remaining for Fight Night Series",
            time: "1 day ago",
            Icon: Timer
        }
    ];

    return (
        <>
            <HeaderPreLogin/>

            {/* Main Wrapper */}
            <main className="bg-zinc-900 min-h-screen pt-40 pb-20 px-5">

                {/* Inner Container */}
                <div className="max-w-[1800px] mx-auto">

                    {/* Page Header */}
                    <PageHeader/>

                    {/* Quick Stats Grid */}
                    <QuickStats quickStats={quickStats}/>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Featured Events */}

                        <LeftColWrapper className="col-span-2 space-y-8">

                            {/* Featured Events */}
                            <FeaturedEvents featuredEvents={featuredEvents}/>

                            {/* Upcoming Events */}
                            <UpcomingEvents upcomingEvents={upcomingEvents}/>

                        </LeftColWrapper>

                        {/* Right Column */}
                        <RightColWrapper className="col-span-2 space-y-8">

                            {/* Event Categories */}
                            <EventCategories/>

                            {/* Event Updates */}
                            <EventUpdates eventHighlights={eventHighlights}/>

                            {/* Price Categories */}
                            <PriceCategories/>

                        </RightColWrapper>
                    </div>
                </div>
                {/* End Inner Container */}

            </main>
        </>
    );
};

export default EventsPage;