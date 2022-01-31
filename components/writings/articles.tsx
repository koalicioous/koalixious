import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dateFormat from 'dateformat';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons'

interface Article {
    author: string,
    categories: string[],
    content: string,
    description: string,
    enclosure: [],
    guid: string,
    link: string,
    pubDate: string,
    thumbnail: string,
    title: string
}

export default function Articles(){
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
    ( async () => {
        const writings = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@koalicious/")
            .then(res => res.json())
            .then(
            (data) => {
                setLoading(false);
                return data.items
            },
            (error) => {
                setLoading(false);
            }
        )
        setArticles(writings)
    })()
    },[])
    return (
        <section className='max-w-5xl mx-auto mt-12 fadein'>
            {
                !loading && articles.map((article: Article, index) => {
                    return (
                        <Link key={index} href={article.link}>
                            <a className='transition-all p-4 my-5 group rounded-md border-b border-gray-50 block hover:bg-gray-50' key={index} target="_blank" rel='noreferrer'>
                                <p className='text-sm md:text-base text-gray-500 mb-2'>{dateFormat(new Date(article.pubDate), "d mmmm yyyy")}</p>
                                <h1 className='transition-all text-xl md:text-2xl font-semibold text-gray-700 group-hover:text-blue-600'>{article.title}</h1>
                                <div className='mt-2 text-sm text-gray-500 md:text-base'>
                                    <FontAwesomeIcon icon={faLink} />
                                    <span className="ml-2">{article.guid}</span>
                                </div>
                                {/* <p>{article.content}</p>  */}
                            </a>
                        </Link>
                    )
                })
            }
        </section>
    )
}