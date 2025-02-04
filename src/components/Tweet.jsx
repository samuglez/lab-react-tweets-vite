import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./TimeStamp";
import User from "./User";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      
      <ProfileImage tweet={tweet}/>

      <div className="body">
        <div className="top">
          <User tweet={tweet}/>

          
          <TimeStamp tweet={tweet}/>
        </div>

        
        <Message tweet={tweet}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
