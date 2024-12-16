
import React from 'react';
import Link from "next/link";

import {
    Bell, Search, Menu, ChevronDown, MessageSquare,
    Users, Trophy, Building2, Filter, X, ArrowRight,
    Star, GraduationCap, BadgeCheck, Camera, LogIn, UserPlus
} from 'lucide-react';

import {Button} from "@/components/ui/button";

import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import HeaderPostLogin from "@/app/_ui/HeaderPostLogin";


// import SearchNetwork from "@/app/_ui/SearchNetwork";

const Header = ({user}) => {

    console.log("user from Header", user)


    const renderAuthSection = () => {
        if (user) {
            return (
                <>
                    <HeaderPostLogin user={user}/>
                    {/* Notification Center */}

                </>
            );
        }

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex items-center space-x-3 hover:bg-zinc-800/80 pl-3 pr-4 h-9"
                    >
                        <div className="flex items-center space-x-3">
                            <Avatar className="h-7 w-7 border border-zinc-700 ring-2 ring-red-500">
                                <AvatarFallback className="bg-zinc-800 text-white">UFP</AvatarFallback>
                            </Avatar>
                            <div className="hidden md:block text-left">
                                <div className="text-sm font-medium text-zinc-100">Guest User</div>
                                <div className="text-xs text-zinc-400">Limited Access</div>
                            </div>
                        </div>
                        <ChevronDown className="h-4 w-4 text-zinc-400"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="w-64 bg-zinc-900 border-zinc-800 mt-2"
                >
                    <div className="px-3 py-2 border-b border-zinc-800">
                        <div className="font-medium text-zinc-100">Welcome to UFP Global</div>
                        <div className="text-sm text-zinc-400">Sign in to access all features</div>
                    </div>
                    <div className="p-2">
                        <DropdownMenuItem
                            className="flex items-center px-3 py-2.5 hover:bg-zinc-800 focus:bg-zinc-800 rounded-md cursor-pointer">
                            <LogIn className="h-4 w-4 mr-3 text-zinc-400"/>
                            <span className="text-zinc-100">
                                <Link href={"/login"}>
                                    Sign In
                                </Link>
                            </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex items-center px-3 py-2.5 hover:bg-zinc-800 focus:bg-zinc-800 rounded-md cursor-pointer">
                            <UserPlus className="h-4 w-4 mr-3 text-zinc-400"/>
                            <span className="text-zinc-100">
                                <Link href={"/register"}>
                                    Create Account
                                </Link>
                            </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex items-center px-3 py-2.5 hover:bg-zinc-800 focus:bg-zinc-800 rounded-md cursor-pointer">
                            <GraduationCap className="h-4 w-4 mr-3 text-zinc-400"/>
                            <span className="text-zinc-100">Help Center</span>
                        </DropdownMenuItem>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Main Header */}
            <div className="bg-zinc-900 border-zinc-800">
                <div className="max-w-[1800px] mx-auto">
                    {/* Upper Header Section */}
                    <div className="h-16 px-4 flex items-center justify-between border-b border-zinc-800/50">
                        {/* Left Section */}
                        <div className="flex items-center space-x-8">
                            {/* Mobile Menu */}
                            <div className="md:hidden">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button size="icon" variant="ghost"
                                                className="hover:bg-zinc-800/80 transition-colors">
                                            <Menu className="h-5 w-5 text-zinc-100"/>
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="left" className="bg-zinc-900 border-zinc-800 p-0">
                                        {/* Mobile menu content */}
                                    </SheetContent>
                                </Sheet>
                            </div>

                            {/* Logo */}
                            <Link href="/">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-red-500 p-1.5 rounded">
                                        <Trophy className="h-6 w-6 text-white"/>
                                    </div>
                                    <div className="text-2xl font-bold text-white">
                                        ufp<span className="text-red-500">.global</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Main Navigation */}
                            <nav className="hidden md:flex items-center space-x-1 ">
                                <Link href={"/dashboard"}
                                        variant="ghost"
                                        className="text-zinc-100 hover:bg-zinc-800/80 px-4 h-8 rounded-none border-b-2 border-red-500"
                                >
                                    Discover
                                </Link>
                                {['Events', 'Rankings', 'Organizations'].map((item) => (
                                    <Link href={`/${item.toLowerCase()}`}
                                        key={item}
                                        variant="ghost"
                                        className="text-zinc-100 hover:bg-zinc-800/80 px-4 h-8 rounded-none border-b-2 border-transparent hover:border-red-500/50 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center space-x-6">
                            {renderAuthSection()}
                        </div>
                    </div>

                    {/* Search Bar Section */}
                   {/*<SearchNetwork/>*/}
                </div>
            </div>
        </header>
    );
};

export default Header;
