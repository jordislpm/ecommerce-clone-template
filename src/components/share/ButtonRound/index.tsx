'use client'
import React from 'react'

interface ButtonRoundProps {
    text: string;
    buttonAction: () => void
}

function ButtonRound({ text, buttonAction }: ButtonRoundProps) {
    return (
        <button
            onClick={buttonAction}
            className="rounded-2xl ring-1 ring-secundary text-secundary w-max py-2 px-4 text-xs hover:bg-secundary hover:text-white">
            {text}
        </button>
    )
}

export default ButtonRound