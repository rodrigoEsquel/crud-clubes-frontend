const baseUrl = 'http://localhost:8080/v1/';
const DELETE = {method: 'DELETE'};


async function getTeams() {
  const response = await fetch(baseUrl);
  const teams = await response.json();
  return teams.data;
}

async function getTeam(tla) {
  const response = await fetch(`${baseUrl}${tla}`);
  const team = await response.json();
  return team.data;
}

async function cretateTeam() {
  const response = await fetch(baseUrl, { method: 'POST'});
  const createdTeam = await response.json();
  return createdTeam.data;
}

async function editTeam(tla, body) {
    
  const response = await fetch(`${baseUrl}${tla}`, {
    body,
    method: 'POST',
  });
  const editedTeam = await response.json();
  return editedTeam.data;
}

async function deleteTeam(tla) {
  const response = await fetch(`${baseUrl}${tla}`, DELETE);
  const team = await response.json();
  return team;
}

const apiClubes = {
  getTeams,
  getTeam,
  cretateTeam,
  editTeam,
  deleteTeam,
}

export default apiClubes