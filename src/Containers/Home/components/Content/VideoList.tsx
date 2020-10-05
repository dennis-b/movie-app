import React from 'react';
import { VideoItem } from "./VideoItem";
import { StGrid } from "../../../../Components";
import { Video } from "../../models";

export const VideoList = ({ videos }: { videos: Video[] }) => {
    return (
        <StGrid container spacing={2} p={1} display='flex'>
            {videos && videos.map((video, index) => (
                <VideoItem
                    key={`${video.imdbID}_${index}`}
                    video={video}
                />
            ))}
        </StGrid>
    );
};

