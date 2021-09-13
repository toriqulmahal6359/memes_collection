import React from "react";
import { ImageItems } from "./App";

interface imageProps {
    items: ImageItems;
}

export const ImageList: React.FC<imageProps> = (props) => {
    return (
    <ul>
        { props.items.map(item => (
        <li key={item.id}>
            <img src={`${item.images}`} alt={item.title} />
        </li>
    )) }
    </ul>
    )
}