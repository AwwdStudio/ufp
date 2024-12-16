import {ArrowRight, Building2, Filter, Search, Star, Trophy, Users} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Badge} from "@/components/ui/badge";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";


export default function SearchNetwork() {

    const [searchFilters, setSearchFilters] = useState({
        fighters: true,
        events: true,
        clubs: false,
        organizations: false
    });
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const filterOptions = [
        {id: 'fighters', label: 'Fighters', icon: Users, count: '2.4K'},
        {id: 'events', label: 'Events', icon: Trophy, count: '156'},
        {id: 'clubs', label: 'Clubs', icon: Building2, count: '489'},
        {id: 'organizations', label: 'Organizations', icon: Star, count: '92'}
    ];

    return (
        <div className="h-14 px-4 flex items-center border-b border-zinc-800/50">
            <div className="flex-1 max-w-3xl relative mx-auto">
                <div className="flex items-center">
                    <div className="relative flex-1">
                        <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4"/>
                        <Input
                            placeholder="Search fighters, events, clubs..."
                            className="w-full pl-10 pr-24 h-10 bg-zinc-800/50 border-transparent focus:border-red-500/50 focus:bg-zinc-800
                             text-white placeholder:text-zinc-500 transition-all ring-0 focus:ring-1 focus:ring-red-500/20"
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                        />
                        {isSearchFocused && (
                            <div
                                className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl">
                                <div className="p-3 border-b border-zinc-800">
                                    <div
                                        className="flex items-center justify-between text-sm text-zinc-400 mb-2">
                                        <span>Filters</span>
                                        <span
                                            className="text-xs">{Object.values(searchFilters).filter(Boolean).length} active</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {filterOptions.map((filter) => (
                                            <Badge
                                                key={filter.id}
                                                variant={searchFilters[filter.id] ? 'default' : 'outline'}
                                                className={`cursor-pointer ${
                                                    searchFilters[filter.id]
                                                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border-transparent'
                                                        : 'bg-transparent hover:bg-zinc-800 border-zinc-700'
                                                }`}
                                                onClick={() => setSearchFilters(prev => ({
                                                    ...prev,
                                                    [filter.id]: !prev[filter.id]
                                                }))}
                                            >
                                                <filter.icon className="h-3 w-3 mr-1"/>
                                                {filter.label}
                                                <span className="ml-1 opacity-60">{filter.count}</span>
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="text-xs text-zinc-500 px-2 pb-2">Recent Searches</div>
                                    {['Alex "The Predator" Silva', 'Miami Fight Night 2024', 'Elite Fight Club'].map((item) => (
                                        <button
                                            key={item}
                                            className="w-full flex items-center px-3 py-2 hover:bg-zinc-800 rounded-md group"
                                        >
                                            <Search
                                                className="h-3 w-3 text-zinc-500 group-hover:text-zinc-400 mr-3"/>
                                            <span
                                                className="text-sm text-zinc-300 group-hover:text-white">{item}</span>
                                            <ArrowRight
                                                className="h-3 w-3 text-zinc-500 group-hover:text-zinc-400 ml-auto opacity-0 group-hover:opacity-100"/>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 relative"
                            >
                                <Filter className="h-4 w-4"/>
                                {Object.values(searchFilters).filter(Boolean).length > 0 && (
                                    <span
                                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                                    {Object.values(searchFilters).filter(Boolean).length}
                                                </span>
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="w-72 bg-zinc-900 border-zinc-800 p-3"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-zinc-100">Search Filters</div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 text-xs text-zinc-400 hover:text-zinc-100"
                                    onClick={() => setSearchFilters({
                                        fighters: false,
                                        events: false,
                                        clubs: false,
                                        organizations: false
                                    })}
                                >
                                    Clear all
                                </Button>
                            </div>
                            {filterOptions.map((filter) => (
                                <div
                                    key={filter.id}
                                    className="flex items-center px-2 py-2 hover:bg-zinc-800 rounded-md cursor-pointer group"
                                    onClick={() => setSearchFilters(prev => ({
                                        ...prev,
                                        [filter.id]: !prev[filter.id]
                                    }))}
                                >
                                    <filter.icon className={`h-4 w-4 mr-3 ${
                                        searchFilters[filter.id] ? 'text-red-400' : 'text-zinc-400'
                                    }`}/>
                                    <div className="flex-1">
                                        <div className={`text-sm ${
                                            searchFilters[filter.id] ? 'text-zinc-100' : 'text-zinc-300'
                                        }`}>
                                            {filter.label}
                                        </div>
                                        <div className="text-xs text-zinc-500">{filter.count} available
                                        </div>
                                    </div>
                                    {searchFilters[filter.id] && (
                                        <Badge className="bg-red-500/20 text-red-400 ml-2">
                                            Active
                                        </Badge>
                                    )}
                                </div>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}