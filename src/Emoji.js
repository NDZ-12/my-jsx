import React from 'react';
import './Emoji.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];

const  data =[


    {
     id:1,
     Name:'Niranjan'

    },
    {
        id:2,
     Name:'Suraj'
    },
    {

        id:3,
     Name:'Mohan'
    }
]

const Emoji = () => {
    const greeting = "greeting";
    const displayAction = true;
    return(
      <div className="container">
        <h1 id={greeting}>Hello, World</h1>
        {displayAction && <p>I am writing JSX</p>}
        <ul>
          {
            emojis.map(emoji => (
              <li key={emoji.name}>
                <button
                  onClick={displayEmojiName}
                >
                  <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                </button>
              </li>
            ))
          }
        </ul>
        <ul>
            {
                data.map(x=> (
                        <li key ={x.id}>
                            <span>{x.Name}</span>
                        </li>

                ))
            }


        </ul>
      </div>
    )
}

export default Emoji