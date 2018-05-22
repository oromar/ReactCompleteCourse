
let app = {
  title: 'Title',
  subtitle: 'subTitle'
}

let template =
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one </li>
      <li>Item two</li>
      <li>Item three</li>
      <li>Item asdafour</li>
    </ol>
  </div>

let user = {
  name: 'Oromar',
  age: 33,
  location: 'Recife'
}

function getLocation (location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}

let templateTwo =
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>

let appRoot = document.getElementById('app')

/* global ReactDOM */
ReactDOM.render(templateTwo, appRoot)
