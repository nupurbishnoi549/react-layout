import React, { useState, useEffect } from 'react';

const PracticeUseEffect = () => {
    const [count, setCount] = useState(0);
    const [commentCount, setCounting] = useState(0);

    const increase = () => setCount(count + 1);
    const CommentIncrease = () => setCounting(commentCount + 1);

    useEffect(() => {
        console.log(' Like count:', count);
    }, [count]);

    useEffect(() => {
        console.log(' Comment count:', commentCount);
    }, [commentCount]);

    return (
        <div className='position-relative d-flex align-items-center justify-content-center margin-top-40'>
            <img src="../assets/images/png/colorfull-img.png" alt="colorful" className='colorful-img' />
            <div className='d-flex position-absolute bottom-6 left-41 align-center'>
                <a onClick={increase} className='padding-right-15 cursor-pointer'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <p className='text-number padding-right-35'>{count}</p>

                <a onClick={CommentIncrease} className='padding-right-15 cursor-pointer'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 19C17.771 19 19.657 19 20.828 17.828C22 16.657 22 14.771 22 11C22 7.229 22 5.343 20.828 4.172C19.657 3 17.771 3 14 3H10C6.229 3 4.343 3 3.172 4.172C2 5.343 2 7.229 2 11C2 14.771 2 16.657 3.172 17.828C3.825 18.482 4.7 18.771 6 18.898"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 19C12.764 19 11.402 19.5 10.159 20.145C8.161 21.182 7.162 21.701 6.67 21.37C6.178 21.04 6.271 20.015 6.458 17.966L6.5 17.5"
                            stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </a>
                <p className='text-number'>{commentCount}</p>

                <a href="" className='padding-left-80'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 22C16.9662 22.0061..." fill="white" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default PracticeUseEffect;
