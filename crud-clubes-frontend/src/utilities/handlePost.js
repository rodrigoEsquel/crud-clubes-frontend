async function handlePost(e, callback, tla, team, file) {
  e.preventDefault();

  const body = new FormData();
  body.append('file', 'hola mama');
  body.append('name', team.name);
  body.append('tla', team.tla);
  body.append('areaName',team.areaName);
  body.append('website',team.website);
  body.append('email',team.email);

  console.log('body',body)
  console.log('file',file)

  const postedTeam = await callback(tla, body, file);

  return postedTeam;
}

export default handlePost