import React from 'react';

const WebsiteEmbed = ({ url }) => {
    return (
        <div className="website-embed">
            <iframe src={url} title="Embedded Website" width="100%" height="500px" frameborder="0"></iframe>
        </div>
    );
}

export default WebsiteEmbed;