import {Button} from "@/components/ui/button";
import {Shield, Star, Trophy, Users} from "lucide-react";
import React from "react";


export default function EventCategories(props) {

    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Browse Events</h3>
            <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start border-zinc-800 mb-2">
                    <Trophy className="w-4 h-4 mr-2"/>
                    Championship Events
                </Button>
                <Button variant="outline" className="w-full justify-start border-zinc-800 mb-2">
                    <Star className="w-4 h-4 mr-2"/>
                    Fight Night Series
                </Button>
                <Button variant="outline" className="w-full justify-start border-zinc-800 mb-2">
                    <Users className="w-4 h-4 mr-2"/>
                    International Events
                </Button>
                <Button variant="outline" className="w-full justify-start border-zinc-800">
                    <Shield className="w-4 h-4 mr-2"/>
                    Regional Events
                </Button>
            </div>
        </div>
    )
}