import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../../redux/actions/authActions';
 import './userCard.css';


function UserCard({user}) {

    const dispatch=useDispatch();
    const handelDelete=()=>{
        if(window.confirm("Are you sure?")){
          dispatch(deleteUsers(user._id));
        }   
      };
  
  return (
    
  
    
    

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/uploads/${user?.imageUrl} `} style={{height:'270px'}} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
        {user.ocuppation}
        </Card.Text>
        <Button variant='outline-danger' onClick={handelDelete}> Delete</Button>
      </Card.Body>
    </Card>
   




     /* <div className="wra">
        <div className="pro">
          <div className="overlay"> 
            <div className="about d-flex flex-column">
              <h4>{user.name}</h4> <span>{user.ocuppation}</span>
              <Button variant='outline-danger' onClick={handelDelete}> Delete</Button>
            </div>
            
          </div>
         </div>
      </div>
      </div>  */
      
    
    
  
  );
}

export default UserCard;
