import React from 'react';

const Entry = (props) => {
    const { emoji, name, meaning } = props;
    return (
        <div className="entry">
            <span className="emoji">
                {emoji}
            </span>
            <p className="entry_title">
                {name}
            </p>
            <p>
                {meaning}
            </p>
        </div>
    );
}

export default Entry;
