import * as React from "react"
import 'animate.css';
import { useEffect, useState } from "react";
import FirstHeroImage from "./FistHero/first_hero_image";
import FirstHeroContent from "./FistHero/first_hero_content";

export default function FirstHero() {

    return (
        <div className="w-full flex flex-col">
            <FirstHeroImage />
            <FirstHeroContent />
        </div >
    )
}
