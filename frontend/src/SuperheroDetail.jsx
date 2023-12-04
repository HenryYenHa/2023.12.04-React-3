//Comment = alternate style of writing a Component
//const SuperheroDetail = () =>
export function SuperheroDetail(superheroDetailProps) {
  console.log('superheroDetailProps', superheroDetailProps);
  const superhero = superheroDetailProps.superhero;
  const color = superheroDetailProps.superhero.color;
  return (
    <div>
      <h2 style={{ color: color }}>{superhero.name}</h2>
      <ul>
        <li>Power: {superhero.power}</li>
        <li>Home City: {superhero.homeCity}</li>
        <li>Alter Ego: {superhero.alterEgo}</li>
      </ul>
    </div>
  );
}
