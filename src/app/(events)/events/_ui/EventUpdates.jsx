import React from "react";

export default function EventUpdates({eventHighlights}) {


    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Event Updates</h3>
            <div className="space-y-6">
                {eventHighlights.map((highlight, index) => {
                    const HighlightIcon = highlight.Icon;
                    return (
                        <div key={index} className="flex items-start gap-4">
                            <div className="p-2 bg-zinc-800/60 rounded-lg">
                                <HighlightIcon className="w-4 h-4 text-red-500"/>
                            </div>
                            <div>
                                <p className="text-zinc-100">{highlight.description}</p>
                                <p className="text-sm text-zinc-400 mt-1">{highlight.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}