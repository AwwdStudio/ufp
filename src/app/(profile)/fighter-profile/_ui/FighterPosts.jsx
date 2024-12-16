import React from 'react';

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Heart, MessageCircle, Share2} from "lucide-react";


export default function FighterPosts({posts}) {

    return (
       <div>
           {posts.map((post) => (
               <div
                   key={post.id}
                   className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/40 transition-all"
               >
                   <p className="text-zinc-100 mb-4">{post.content}</p>

                   {/* Tags and Timestamp */}
                   <div className="flex items-center flex-wrap gap-2 text-sm text-zinc-400 mb-4">
                       {post.tags.map((tag) => (
                           <Badge
                               key={tag}
                               className="bg-red-500/10 text-red-400 border-red-500/20"
                           >
                               #{tag}
                           </Badge>
                       ))}
                       <span className="ml-auto">{post.timestamp}</span>
                   </div>

                   {/* Engagement */}
                   <div
                       className="flex items-center justify-between pt-4 border-t border-zinc-800">
                       <Button
                           variant="ghost"
                           size="sm"
                           className={`${post.engagement.isLiked ? 'text-red-500' : 'text-zinc-400'} hover:text-red-500`}
                       >
                           <Heart className="w-4 h-4 mr-2"/>
                           {post.engagement.likes.toLocaleString()}
                       </Button>
                       <Button variant="ghost" size="sm"
                               className="text-zinc-400 hover:text-red-500">
                           <MessageCircle className="w-4 h-4 mr-2"/>
                           {post.engagement.comments.toLocaleString()}
                       </Button>
                       <Button variant="ghost" size="sm"
                               className="text-zinc-400 hover:text-red-500">
                           <Share2 className="w-4 h-4 mr-2"/>
                           {post.engagement.shares.toLocaleString()}
                       </Button>
                   </div>
               </div>
           ))}
       </div>
    )
}