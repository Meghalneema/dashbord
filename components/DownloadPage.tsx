"use client"
import React from 'react';
import { cn } from '@/lib/utils';
import { CardContent } from "@/components/Card";
import { Download, DownloadIcon } from "lucide-react";
import { Button } from '@/components/ui/button';


type DownloadProps = {}
export default function DownloadPage({ className,}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("w-[250px] justify-start text-left font-normal", className)}>
            <section>
                <Button title='download the documentation' >
                    <div className="flex items-center"> 
                    <DownloadIcon className="h-4 w-4"/>
                    <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" className='ml-4' download="cv">Download</a>
                    </div>
                </Button>
            </section>
        </div>
    );
}


// C:\Users\HP\Desktop\Node.js\nextjs\Meghal_Neema_Resume.pdf


{/* <Button title='download the documentation' >
                    <div className="flex items-center"> */}
                        // <DownloadIcon className="h-4 w-4" />
                        {/* <p className="ml-4">Download</p> */}
                        // <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" className='text-color-red' download="cv">Download</a>
                    {/* </div>
                </Button> */}
