import React from 'react';

const TeamHelmet = props => {
  if (props.teamLogo) {
    return (
      <div>
        <img className="img-responsive" src={props.teamLogo}/>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default TeamHelmet;