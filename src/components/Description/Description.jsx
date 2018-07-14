import React from 'react';

const Description = (props) => {
  return (
    <div className="paneWrapper" id="descriptionContent">
      <h2 className="aboutHeader">Machine Learning!</h2>
      <p className="aboutParagraph">The Punt prediction program, when given a pair of football teams, 
        makes a prediction as to which football team will win.  It does this by using a 
        data structure known as a decision tree. The following image shows a decision tree which 
        helps us decide whether we will play outside or not.</p>
      <div className="text-center">
        <img className="centered-img img-responsive" alt="Decision Tree" 
          src="./play-outside-decision-tree.png"/>
      </div>
      <p className="aboutParagraph">We read a decision tree by starting at the top or 
        "root node" of the tree and start working toward one of the "leaf nodes" on the bottom 
        of the tree.  Whatever the value of that final leaf node will be the resulting decision.  
        This applies to back to Punt in the way that Punt uses a decision tree to arrive at the 
        final prediction (a.k.a. leaf node) of which team would most likely win should the selected 
        teams play each other.  The details of how this decision tree is built is what determines 
        the accuracy of Punt's predictions.</p> 
      <h3 className="aboutHeader">What is ID3?</h3>
      <p className="aboutParagraph">ID3 (Iterative Dichotomiser 3) is an algorithm invented by 
        machine learning and artificial intelligence specialist Ross Quinlan.  Punt uses the ID3 
        algorithm to build a decision tree with leaf nodes for whether team A or team B will win 
        a game of football.  It should be noted that ID3 requires "training data" to accurately 
        build a tree.  In Punt, we are using training data provided courtesy of mysportsfeed.com to 
        train, then subsequently build our decision tree.</p>
      <h3 className="aboutHeader">Future Developments</h3>
      <p className="aboutParagraph">Currently, we can only train our decision tree with data that
        goes back several years.  That said, the decision trees ID3 builds for us will only get 
        more accurate with the addition of new years of data.  In theory, as more statistics and data 
        become available through the mysportsfeed.com REST api, the resulting decision trees 
        should only become more accurate.  Furthermore, a possibility for future development 
        involves selectively picking years of data to omit/include when training the decision tree.    
      </p>
    </div>
  );
};

export default Description;