import {Badge} from "@/components/ui/badge";
import {Calendar, Heart, MapPin, Share2, Shield, Target, Ticket, Users} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";

export default function FeaturedEvents({featuredEvents}) {

    return (
        <div className="space-y-6">
            {featuredEvents.map((event, index) => (
                <div
                    key={index}
                    className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/40 transition-all"
                >
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-white">{event.title}</h2>
                                <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                                    {event.status}
                                </Badge>
                            </div>
                            <p className="text-lg text-red-400 mb-4">{event.mainEvent}</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-zinc-300">
                                    <Calendar className="w-4 h-4 text-zinc-400"/>
                                    <span>{event.date} - {event.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-300">
                                    <MapPin className="w-4 h-4 text-zinc-400"/>
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-300">
                                    <Shield className="w-4 h-4 text-zinc-400"/>
                                    <span>{event.matches} matches scheduled</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <div className="flex items-center gap-2">
                                    <Target className="w-4 h-4 text-zinc-400"/>
                                    <span
                                        className="text-zinc-300">{event.predictions} predictions</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-zinc-400"/>
                                    <span className="text-zinc-300">{event.attendance} capacity</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-64 space-y-4">
                            <Button className="w-full bg-red-500 hover:bg-red-600">
                                <Ticket className="w-4 h-4 mr-2"/>
                                {event.ticketStatus}
                            </Button>
                            <div className="space-y-2">
                                {event.fighters.map((fighter, idx) => (
                                    <div key={idx}
                                         className="flex items-center gap-2 p-2 bg-zinc-800/40 rounded-lg">
                                        <Avatar className="w-8 h-8 border border-zinc-700">
                                            <AvatarImage src={fighter.image}/>
                                            <AvatarFallback>{fighter.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white truncate">{fighter.name}</p>
                                            <p className="text-xs text-zinc-400">{fighter.record}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1 border-zinc-800">
                                    <Heart className="w-4 h-4 mr-2"/>
                                    Save
                                </Button>
                                <Button variant="outline" size="sm" className="flex-1 border-zinc-800">
                                    <Share2 className="w-4 h-4 mr-2"/>
                                    Share
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}