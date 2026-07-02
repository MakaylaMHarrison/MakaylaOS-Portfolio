/*
=============================================
CpuChip.jsx
=============================================
This file is component that render CPU pulse animation to 
simulate "processing"
 */

/*
==================================================
            Imports
==================================================
*/

import React from 'react';
//Importing specifically from lucide-react for function components
import {Cpu} from 'lucide-react';

/**
 * CpuChip Component
 * Render a CPU icon with a rythmic pulse amimation to simulate
 *  "processing"
 */

const CpuChip = () => {
    return (
       
        <div className="flex items-center justify-center p-2">
            <div className="relative">

                {/* GLOW EFFECT */}
                {/*<div className="absolute inset-0 bg-blue-400 blur-xl opacity-90 animate-cpu-pulse"/>*/}

                {/* THE CPU ICON: Size and custom classname */}
                <Cpu 
                    size={29}
                    className="text-blue-400 animate-cpu-pulse relative z-10"
                    strokeWidth={1.7}
                />

               

            </div>
        </div>

    );
};

export default CpuChip;