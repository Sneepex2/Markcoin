import PersonCard from '../ui/PersonCard';

function PeopleItem(props) {
  console.log('hello');

  return (
    <li>
      <PersonCard>
        <div>
          <p>{props.id}</p>
          <h3>{props.username}</h3>
          <p>{props.created}</p>
          <img src='../coin.gif' />
        </div>
      </PersonCard>
    </li>
  );
}

export default PeopleItem;
