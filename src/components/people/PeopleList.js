import PeopleItem from './PeopleItem';

function PeopleList(props) {
  return (
    <ul>
      {props.people.reverse().map((person) => (
        <PeopleItem
          key={person.id}
          id={person.id}
          username={person.username}
          created={person.creationDate}
        />
      ))}
    </ul>
  );
}

export default PeopleList;
