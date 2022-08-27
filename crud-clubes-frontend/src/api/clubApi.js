const baseUrl = 'http://locahost:8080/v1/';
const POST = {method: 'POST'}


async function getTeams() {
  const response = await fetch(baseUrl);
  const teams = await response.json();
  return teams;
}

async function getTeam(tla) {
  const response = await fetch(`${baseUrl}${tla}`);
  const team = await response.json();
  return team;
}

async function cretateTeam(data) {
  const response = await fetch(baseUrl,
    
  );
  const team = await response.json();
  return team;
}

const apiClubes = {
  getTeams,
  getTeam,
  cretateTeam: (Team) => 
  editTeam: ()
}