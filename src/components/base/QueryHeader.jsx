import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function QueryHeader() {
    const location = useLocation();
    const [headerContent, setHeaderContent] = useState('');

    useEffect(() => {
        const parseQueryParams = (search) => {
            return new URLSearchParams(search);
        };

        const queryParams = parseQueryParams(location.search);

        if (queryParams.has('topic')) {
            const topic = queryParams.get('topic');
            setHeaderContent(`Articles about ${topic}`);
        } else {
            setHeaderContent('All Articles');
        }
    }, [location.search]);

    return (
        <div className='query-header'>
        <header>
            <h1>{headerContent}</h1>
            </header>
        </div>
    );
}

export default QueryHeader;
