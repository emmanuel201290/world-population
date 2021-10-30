import React, { useEffect, useState } from 'react';
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';

export const NewCard = ({ data }) => {
    const [newsTitle, setNewsTitle] = useState(data);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        {
            data &&
                data.slice(index - 1, index).map((data) => {
                    if (data.country !== 'RU') {
                        setNewsTitle(data);
                    } else {
                        setNewsTitle('');
                    }
                });
        }
    }, [index]);

    const increaseIndex = () => {
        if (index < data.length) {
            setIndex(index + 1);
        }
    };
    const decreaseIndex = () => {
        if (index > 1) {
            setIndex(index - 1);
        }
    };

    return (
        <>
            <div className="news__information-covi">
                <div className="news-information-left">
                    <div className="subtitle-label">News </div>
                    <hr
                        style={{
                            background: '#01b0f0',
                            marginLeft: '1.5rem',
                            height: '0.10rem',
                            width: '6rem',
                        }}
                    />

                    <div className="title-label">{newsTitle.title}</div>
                </div>

                <div className="news-information-right">
                    <div
                        className={
                            (index > 1
                                ? 'news__new-button'
                                : 'news__button-disable-right',
                            index < data.length
                                ? 'news__new-button'
                                : 'news__button-disable-left')
                        }
                    >
                        <label id="btn-1" onClick={decreaseIndex}>
                            <HiArrowCircleLeft size={'3rem'} />
                        </label>
                        <label id="btn-2" onClick={increaseIndex}>
                            <HiArrowCircleRight size={'3rem'} />
                        </label>
                    </div>

                    <hr />
                    {newsTitle.summary === undefined ? (
                        <div>Information is not available ! </div>
                    ) : (
                        newsTitle.summary.substr(0, 500) + ' ... '
                    )}
                    <label>
                        <a href={newsTitle.link} target="__blank">
                            Click on this link to see all the information
                        </a>
                    </label>

                    <div className="news__additional-information">
                        <div className="additional-information-country">
                            <label> Country:</label> {newsTitle.country}
                        </div>
                        <div className="additional-information-rank">
                            <label>Rank:</label> {newsTitle.rank}
                        </div>
                        <div className="additional-information-topic">
                            <label>Topic:</label> {newsTitle.topic}
                        </div>
                    </div>

                    <hr
                        style={{
                            background: '#2e3136',
                            marginLeft: '-2rem',
                            height: '0.10rem',
                            width: '100%',
                        }}
                    />

                    <div className="news__author">
                        <label>
                            Autor:{' '}
                            {newsTitle.author === null
                                ? 'None'
                                : newsTitle.author}{' '}
                        </label>{' '}
                        <br />
                        <label>Published: {newsTitle.published_date}</label>
                        <br />
                    </div>
                    <br />
                    <div className="news__label-style">
                        <div className="news__current-page">{`${index}`}</div>
                        <strong>From</strong>
                        <div className="news__total-page">{`${data.length}`}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
