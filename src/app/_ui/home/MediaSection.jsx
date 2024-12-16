import React from 'react';
import { Play, Star, Bookmark, Share2, TrendingUp, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const MediaSection = () => {
    const featuredVideo = {
        title: "Championship Bout Highlights: Silva vs Thompson",
        views: "1.2M",
        date: "2 days ago",
        duration: "15:24",
        thumbnail: "/api/placeholder/800/450",
        sport: "MMA",
        organization: "Elite Fighting Championship",
        fighter1: {
            name: "Alex Silva",
            image: "/api/placeholder/64/64"
        },
        fighter2: {
            name: "Jake Thompson",
            image: "/api/placeholder/64/64"
        }
    };

    const videos = [
        {
            title: "Top 10 Knockouts of the Month",
            views: "856K",
            date: "1 week ago",
            duration: "12:45",
            thumbnail: "/api/placeholder/400/225",
            sport: "Boxing",
            featured: true
        },
        {
            title: "Technical Breakdown: Championship Fight",
            views: "524K",
            date: "3 days ago",
            duration: "18:30",
            thumbnail: "/api/placeholder/400/225",
            sport: "MMA"
        },
        {
            title: "Rising Star Series: Sarah Martinez",
            views: "342K",
            date: "5 days ago",
            duration: "08:15",
            thumbnail: "/api/placeholder/400/225",
            sport: "Muay Thai"
        },
        {
            title: "Fight Night Highlights: London Event",
            views: "623K",
            date: "1 day ago",
            duration: "14:20",
            thumbnail: "/api/placeholder/400/225",
            sport: "BKB"
        }
    ];

    return (
        <div className="bg-zinc-900 py-20 px-5 border-t border-t-zinc-800">
            <div className="max-w-[1800px] mx-auto">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-white">Fight Library</h2>
                    <Tabs defaultValue="all" className="w-auto">
                        <TabsList className="bg-zinc-800/50">
                            {['All', 'MMA', 'Boxing', 'Muay Thai', 'BKB'].map((tab) => (
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

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Featured Video - Takes up 2 columns */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="group relative">
                            <div className="aspect-video relative rounded-xl overflow-hidden">
                                <img
                                    src={featuredVideo.thumbnail}
                                    alt="Featured video thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <Button
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 rounded-full w-16 h-16"
                                >
                                    <Play className="w-6 h-6 ml-1" />
                                </Button>
                                <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-white text-sm">
                                    {featuredVideo.duration}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-white">{featuredVideo.title}</h3>
                                    <div className="flex items-center space-x-4 text-zinc-400 text-sm">
                                        <span>{featuredVideo.views} views</span>
                                        <span>{featuredVideo.date}</span>
                                        <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                                            {featuredVideo.sport}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                                        <Bookmark className="w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex items-center -space-x-2">
                                    <Avatar className="border-2 border-zinc-800 w-10 h-10">
                                        <AvatarImage src={featuredVideo.fighter1.image} />
                                        <AvatarFallback>{featuredVideo.fighter1.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="border-2 border-zinc-800 w-10 h-10">
                                        <AvatarImage src={featuredVideo.fighter2.image} />
                                        <AvatarFallback>{featuredVideo.fighter2.name[0]}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <span className="text-zinc-400">{featuredVideo.organization}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Video List */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-red-500" />
                                Trending Fights
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {videos.map((video, index) => (
                                <div
                                    key={index}
                                    className="group bg-zinc-800/20 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 hover:bg-zinc-800/40 hover:border-red-500/20 transition-all"
                                >
                                    <div className="flex gap-4">
                                        <div className="relative w-40 h-24 flex-shrink-0">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                            <div className="absolute bottom-1 right-1 bg-black/60 px-1.5 py-0.5 rounded text-white text-xs">
                                                {video.duration}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white font-medium line-clamp-2 mb-2">{video.title}</h4>
                                            <div className="flex items-center space-x-3 text-zinc-400 text-sm">
                                                <span>{video.views} views</span>
                                                <span>{video.date}</span>
                                            </div>
                                            <div className="mt-2">
                                                <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                                                    {video.sport}
                                                </Badge>
                                                {video.featured && (
                                                    <Badge className="ml-2 bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
                                                        <Star className="w-3 h-3 mr-1" />
                                                        Featured
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            className="w-full border-zinc-800 text-zinc-200 bg-zinc-800 mt-4"
                        >
                            View All Videos
                            <Play className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaSection;