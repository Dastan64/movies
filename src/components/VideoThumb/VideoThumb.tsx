import React from 'react';
import "./VideoThumb.scss";
import { VideoThumbProps } from "./types";

const VideoThumb = ({ info }: VideoThumbProps) => {
    const { key, name } = info;
    return (
        <article className={'vthumb'}>
            <figure>
                <img className={'vthumb__image'} width={320} height={180}
                     src={`http://img.youtube.com/vi/${key}/mqdefault.jpg`} alt=""/>
            </figure>
            <span className="vthumb__title">{name}</span>
        </article>
    );
};

export default VideoThumb;
