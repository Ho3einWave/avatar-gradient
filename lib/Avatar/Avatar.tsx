import { CSSProperties, FC } from "react";
import clsx from "clsx";

export type AvatarProps = {
    username: string;
    className?: string;
    style?: CSSProperties;
};

function hashStringToInt(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function intToRGB(i: number) {
    const r = (i >> 16) & 255;
    const g = (i >> 8) & 255;
    const b = i & 255;
    return `rgb(${r},${g},${b})`;
}

function generateGradient(username: string) {
    const hash1 = hashStringToInt(username);
    const hash2 = hashStringToInt(username.split("").reverse().join(""));

    const color1 = intToRGB(hash1);
    const color2 = intToRGB(hash2);

    return `linear-gradient(135deg, ${color1}, ${color2})`;
}

export const Avatar: FC<AvatarProps> = ({ className, style, username }) => {
    const gradient = generateGradient(username);
    return (
        <div
            className={clsx("w-12 h-12 rounded-full", className)}
            style={{ background: gradient, ...style }}
        ></div>
    );
};
