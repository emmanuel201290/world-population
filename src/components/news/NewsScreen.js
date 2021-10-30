import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NewCard } from './NewsCard';

export const NewsScreen = () => {
    const { news } = useContext(AuthContext);

    return <div>{news && <NewCard data={news.articles} />}</div>;
};
