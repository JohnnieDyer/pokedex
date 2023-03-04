'use client';
import React from 'react';

export default function TypeBubble({ moveName }: any) {
    
    return (
        <div className={`h-12 w-min text-md p-2 bg-slate-300 rounded-xl shadow-lg overflow-x-hidden whitespace-nowrap`}>
            <span className={'m-auto px-1 pb-1 text-ellipsis overflow-x-hidden'}>
                {moveName}
            </span>
        </div>
    )
}
