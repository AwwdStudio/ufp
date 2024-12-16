import {Calendar, Fire, Play, Target, Trophy, Users} from "lucide-react";


// DUMMY USER
export const USER = {
    name: "Mike Thompson",
    joinDate: "Member since 2023",
    avatar: "/api/placeholder/64/64",
    notifications: 3,
    messages: 2
};

// QUICK STATS
export const QUICK_STATS = [
    {
        label: "Live Events",
        value: "3",
        trend: "Starting Soon",
        trendUp: true,
        Icon: Play
    },
    {
        label: "Active Fighters",
        value: "186",
        trend: "+12 this week",
        trendUp: true,
        Icon: Users
    },
    {
        label: "Predictions Open",
        value: "8",
        trend: "4 closing soon",
        trendUp: true,
        Icon: Target
    },
    {
        label: "Fight Cards",
        value: "12",
        trend: "Next 30 days",
        trendUp: true,
        Icon: Calendar
    }
];

// TRENDING FIGHTS
export const TRENDING_FIGHTS = [
    {
        title: "Elite FC 160",
        mainEvent: "Martinez vs. Thompson",
        date: "Dec 20, 2024",
        location: "Miami, FL",
        status: "Upcoming",
        views: "142K",
        predictions: "23K"
    },
    {
        title: "Fight Night Series",
        mainEvent: "Silva vs. Johnson",
        date: "Dec 28, 2024",
        location: "Las Vegas, NV",
        status: "Predictions Open",
        views: "98K",
        predictions: "15K"
    }
];

// POPULAR FIGHTERS
export const POPULAR_FIGHTERS = [
    {
        name: "Sarah Martinez",
        status: "Next Fight: Dec 20",
        followers: "256K",
        engagement: "+24%",
        record: "12-0-0",
        image: "/api/placeholder/64/64",
        weightClass: "Bantamweight"
    },
    {
        name: "Alex Silva",
        status: "Last Won: Nov 15",
        followers: "198K",
        engagement: "+18%",
        record: "15-2-0",
        image: "/api/placeholder/64/64",
        weightClass: "Lightweight"
    },
    {
        name: "Mike Johnson",
        status: "Training Camp",
        followers: "145K",
        engagement: "+15%",
        record: "8-1-0",
        image: "/api/placeholder/64/64",
        weightClass: "Welterweight"
    }
];

// COMMUNITY ACTIVITY
export const COMMUNITY_ACTIVITY = [
    {
        type: "Trending",
        description: "Fight breakdown: Martinez's winning streak",
        time: "2 hours ago",
        engagement: "1.2K comments",
        Icon: Fire
    },
    {
        type: "Event",
        description: "Elite FC 160 predictions are now open",
        time: "5 hours ago",
        engagement: "5.6K predictions",
        Icon: Target
    },
    {
        type: "Analysis",
        description: "Top 10 submissions of the month",
        time: "1 day ago",
        engagement: "856 reactions",
        Icon: Trophy
    }
];