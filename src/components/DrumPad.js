import React, { useEffect, useState } from "react";
import "./DrumPad.css";
export default function DrumPad({ handleClick }) {
  const drumKeys = [
    {
      id: 1,
      name: "Q",
      extended: "Heater 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: 2,
      name: "W",
      extended: "Heater 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: 3,
      name: "E",
      extended: "Heater 3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: 4,
      name: "A",
      extended: "Heater 4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: 5,
      extended: "Clap",
      name: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: 6,
      extended: "Open HH",
      name: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: 7,
      extended: "Kick n' Hat",
      name: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: 8,
      name: "X",
      extended: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: 9,
      name: "C",
      extended: "Closed HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [isActive, setIsActive] = useState(false);

  const playAudio = (nameID, nameExtended, e) => {
    e.target.classList.add("active");

    setTimeout(() => {
      e.target.classList.remove("active");
    }, 300);
    
    const audio = document.getElementById(nameID);
    audio.play();
    console.log(nameExtended);
    handleClick(nameExtended);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      drumKeys.forEach((drum) => {
        if (e.key === drum.name || e.key === drum.name.toLowerCase()) {
          playAudio(drum.name, drum.extended);
        }
      });
    });
  }, []);

  return (
    <div className="drumpad" style={mystyle.drumpad}>
      {drumKeys.map((drum) => (
        <div
          id={`clip-` + drum.id}
          className="drum-pad"
          onClick={(e) => {
            playAudio(drum.name, drum.extended, e);
          }}
          data-name={drum.extended}
          style={mystyle.drum_pad}
          key={drum.name}
        >
          <audio className="clip" id={drum.name} src={drum.src} />
          <h2>{drum.name}</h2>
        </div>
      ))}
    </div>
  );
}

const mystyle = {
  drumpad: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "500px",
  },
  drum_pad: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d10000",
    color: "whitesmoke",
    margin: "3px",
    border: "4px solid black",
    cursor: "pointer",
  },
};
