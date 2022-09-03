async function handlePost(e, callback, tla, team) {
  e.preventDefault();

  const body = new FormData();
  body.append('uploaded_file', team.uploaded_file);
  body.append('name', team.name);
  body.append('tla', team.tla);
  body.append('areaName',team.areaName);
  body.append('website',team.website);
  body.append('email',team.email);

  const postedTeam = await callback(tla, body);

  return postedTeam;
}

export default handlePost