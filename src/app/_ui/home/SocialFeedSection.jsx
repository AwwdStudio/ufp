import React from 'react';
import {
    Heart, MessageCircle, Share2, MoreVertical,
    Verified, Award, Trophy, Fire,
    Calendar, Swords, Medal
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SocialFeedSection = () => {
    const posts = [
        {
            id: 1,
            user: {
                name: "Alex 'The Python' Silva",
                handle: "@alexsilva",
                image: "/api/placeholder/64/64",
                verified: true,
                type: "Fighter",
                stats: "15-2-0"
            },
            content: "Fight camp week 6 complete! Feeling stronger and sharper than ever. Big thanks to my team for pushing me to new limits. The countdown to fight night begins! 🥊 #MMA #Training",
            timestamp: "2h ago",
            engagement: {
                likes: 2456,
                comments: 182,
                shares: 64
            },
            tags: ["Training", "MMA"]
        },
        {
            id: 2,
            user: {
                name: "Elite MMA Academy",
                handle: "@elitemma",
                image: "/api/placeholder/64/64",
                verified: true,
                type: "Gym"
            },
            content: "🎉 Congratulations to our fighters who competed this weekend! 3 wins, 2 by submission and 1 by unanimous decision. Proud to see the hard work paying off. Next fight card announcements coming soon! #EliteMMA",
            timestamp: "4h ago",
            engagement: {
                likes: 1834,
                comments: 245,
                shares: 156
            },
            tags: ["Results", "MMA"],
            featured: true
        },
        {
            id: 3,
            user: {
                name: "Sarah 'The Striker' Martinez",
                handle: "@sarahmartinez",
                image: "/api/placeholder/64/64",
                verified: true,
                type: "Fighter",
                stats: "12-0-0"
            },
            content: "Getting ready for the biggest announcement of my career! Stay tuned - this one's going to be special. 👊 Thanks to everyone who's been part of this journey. #UndefeatedRecord #NewChapter",
            timestamp: "6h ago",
            engagement: {
                likes: 3267,
                comments: 428,
                shares: 189
            },
            tags: ["Announcement", "Boxing"]
        }
    ];

    return (
        <div className="bg-zinc-900 py-20 px-5 border-t-zinc-800">
            <div className="max-w-[1800px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col  items-center justify-between mb-12 ">
                    <h2 className="text-3xl font-bold text-white mb-4">Community Feed</h2>
                    <Tabs defaultValue="all" className="w-auto">
                        <TabsList className="bg-zinc-800/50">
                            {['All', 'Fighters', 'Gyms', 'Events', 'Training'].map((tab) => (
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

                {/* Posts Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-zinc-800/20 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/40 hover:border-red-500/20 transition-all"
                        >
                            {/* Post Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start space-x-4">
                                    <Avatar className="w-12 h-12 border-2 border-red-500">
                                        <AvatarImage src={post.user.image} />
                                        <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <span className="font-semibold text-white">{post.user.name}</span>
                                            {post.user.verified && (
                                                <Verified className="w-4 h-4 text-red-500" />
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-zinc-400">
                                            <span>{post.user.handle}</span>
                                            <span>•</span>
                                            <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                                                {post.user.type}
                                            </Badge>
                                            {post.user.stats && (
                                                <Badge variant="outline" className="border-zinc-700">
                                                    {post.user.stats}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                                    <MoreVertical className="w-5 h-5" />
                                </Button>
                            </div>

                            {/* Post Content */}
                            <div className="space-y-4">
                                <p className="text-zinc-100">{post.content}</p>

                                {/* Tags and Timestamp */}
                                <div className="flex items-center flex-wrap gap-2 text-sm text-zinc-400">
                                    {post.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            className="bg-red-500/10 text-red-400 border-red-500/20"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                    <span className="ml-auto">{post.timestamp}</span>
                                </div>

                                {/* Engagement */}
                                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                                    <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-red-500">
                                        <Heart className="w-4 h-4 mr-2" />
                                        {post.engagement.likes.toLocaleString()}
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-red-500">
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        {post.engagement.comments.toLocaleString()}
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-red-500">
                                        <Share2 className="w-4 h-4 mr-2" />
                                        {post.engagement.shares.toLocaleString()}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="mt-8 text-center">
                    <Button
                        variant="outline"
                        className="border-zinc-800 text-zinc-200 bg-zinc-800/50 px-8"
                    >
                        Load More Posts
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SocialFeedSection;