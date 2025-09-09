'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { BaseIcon } from '../base-icon/BaseIcon';

interface AvatarProps {
    src: string;
    size?: number;
    alt?: string;
}

const BaseAvatar: React.FC<AvatarProps> = ({ src, size = 32, alt = 'avatar' }) => {
    const [imgError, setImgError] = useState(false);

    if (!src || imgError) {
        return (
            <div
                style={{ width: size, height: size }}
                className="rounded-full bg-gray-200 flex items-center justify-center"
            >
                <BaseIcon name="User" size={size * 0.5} />
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className="rounded-full object-cover"
            onError={() => setImgError(true)}
        />
    );
};

export default BaseAvatar;
