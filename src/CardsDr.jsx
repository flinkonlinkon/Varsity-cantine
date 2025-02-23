import React from 'react'
// import { Card, CardContent } from "@/components/ui/card";

export default function CardsDr() {

  return (
    <div className="card w-80 bg-base-100 shadow-lg border border-gray-300 rounded-2xl">
      <div className="card-body p-4 space-y-4">
        <div className="text-center text-xl font-bold">
          TOKEN: <span className="text-2xl">41971</span>
        </div>

        <div className="border-t border-dashed border-gray-400 my-2"></div>

        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <div>

            <span className="font-medium">KITCHEN K.O.T</span>
            </div>
            <div className="border-t border-dashed border-gray-400 my-2"></div>
            <span>PRINT T: 02/23/2025 12:13:42 P</span>
          </div>

          <div className="border-t border-dashed border-gray-400 my-2"></div>

          <div className="grid grid-cols-2 font-semibold">
            <span>ITEM</span>
            <span className="text-right">QTY</span>
          </div>

          <div className="border-t border-dashed border-gray-400 my-1"></div>

          <div className="grid grid-cols-2">
            <span>EGG KHICHURY</span>
            <span className="text-right">2</span>
          </div>
        </div>
      </div>
    </div>
  )
}
