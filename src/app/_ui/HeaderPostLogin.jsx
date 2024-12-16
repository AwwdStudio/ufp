"use client";
import {Button} from "@/components/ui/button";
import {BadgeCheck, Bell, Building2, ChevronDown, GraduationCap, MessageSquare, Trophy} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/app/actions/user/logout_user";

export default function HeaderPostLogin({user}) {
    const router = useRouter();

    const handleLogout = async () => {
        const result = await logoutUser();
        if (result.success) {
            router.push('/');
            router.refresh();
        } else {
            // Optionally handle logout error
            console.error(result.error);
        }
    };

    return (
        <>
            <div className="hidden md:flex items-center space-x-2">
                <Button
                    size="icon"
                    variant="ghost"
                    className="hover:bg-zinc-800/80 relative"
                >
                    <MessageSquare className="h-5 w-5 text-zinc-100"/>
                    <span
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                0
                            </span>
                </Button>
                <Button
                    size="icon"
                    variant="ghost"
                    className="hover:bg-zinc-800/80 relative"
                >
                    <Bell className="h-5 w-5 text-zinc-100"/>
                    <span
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                0
                            </span>
                </Button>
            </div>

            {/* Logged In User Profile */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex items-center space-x-3 hover:bg-zinc-800/80 pl-3 pr-4 h-9"
                    >
                        <div className="flex items-center space-x-3">
                            <Avatar className="h-7 w-7 border border-zinc-700 ring-2 ring-red-500">
                                <AvatarImage src="/api/placeholder/32/32"/>
                                <AvatarFallback className="bg-zinc-800 text-white">JD</AvatarFallback>
                            </Avatar>
                            <div className="hidden md:block text-left">
                                <div className="text-sm font-medium text-zinc-100 capitalize">{user.name}</div>
                                <div className="text-xs text-zinc-400 capitalize">{user.prefs.type}</div>
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
                        <div className="font-medium text-zinc-100 capitalize">{user.name}</div>
                        <div className="text-sm text-zinc-400">{user.email}</div>
                    </div>
                    <div className="p-2">
                        {[
                            {label: 'Profile Settings', icon: BadgeCheck},
                            {label: 'Fight Management', icon: Trophy},
                            {label: 'Billing', icon: Building2},
                            {label: 'Help Center', icon: GraduationCap}
                        ].map((item) => (
                            <DropdownMenuItem
                                key={item.label}
                                className="flex items-center px-3 py-2.5 hover:bg-zinc-800 focus:bg-zinc-800 rounded-md cursor-pointer"
                            >
                                <item.icon className="h-4 w-4 mr-3 text-zinc-400"/>
                                <span className="text-zinc-100">{item.label}</span>
                            </DropdownMenuItem>
                        ))}
                    </div>
                    <DropdownMenuSeparator className="bg-zinc-800"/>
                    <div className="p-2">
                        <DropdownMenuItem
                            onClick={handleLogout}
                            className="flex items-center px-3 py-2.5 text-red-500 hover:bg-zinc-800 hover:text-red-400 focus:bg-zinc-800 rounded-md cursor-pointer"
                        >
                            Sign out
                        </DropdownMenuItem>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}