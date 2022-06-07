import React from "react";

const Blogs = () => {
  return (
    <div className="h-[850px] max-w-7xl mx-auto">
      <div className="border-2 m-3 border-blue-400 rounded-xl px-3 py-4">
        <p className="text-lg font-medium">
          1. Authentication vs. Authorization ?
        </p>
        <p>
          <span className="font-semibold">Ans: </span>
          Authentication is a process by which you can validate a user. Like a
          key, the locked door will open by the right key. That's how a system
          only grants access to a user who have the right credentials. But
          Authorization is a process by which the system specify application,
          data, files a user has access to.
        </p>
      </div>
      <div className="border-2 m-3 border-blue-400 rounded-xl px-3 py-4">
        <p className="text-lg font-medium">
          2. Why are you using firebase? What other option do you have to
          implement authentication ?
        </p>
        <p>
          <span className="font-semibold">Ans: </span>
          With firebase, you can just focus on developing your application.
          Because of there internal function is so solid, so you don't need to
          worry about security, authentication, etc. With this, firebase have
          some feature, like cloud messaging, hosting, test lab, real-time
          database, crash reporting, etc. There are lots of alternatives of
          firebase. Okta, Back 4 app, AWS Amplify, Kuzzle, Native Script, etc.
        </p>
      </div>
      <div className="border-2 m-3 border-blue-400 rounded-xl px-3 py-4">
        <p className="text-lg font-medium">
          3. What other services does firebase provide other then
          authentication?
        </p>
        <p>
          <span className="font-semibold">Ans: </span>
          Except authentication, Firebase also provides some features like Cloud
          messaging, hosting, test labs, real-time database, etc.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
