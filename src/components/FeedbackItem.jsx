import React, { useState } from 'react'
import Card from './Card';

function FeedbackItem({item}) {

    const [rating,setRating] = useState(7);
    const [text,setText] = useState('This is an example of feedback form')
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    )
}

export default FeedbackItem
