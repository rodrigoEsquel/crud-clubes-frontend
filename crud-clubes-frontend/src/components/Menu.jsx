import Item from "./Item";

function Menu({teamList}) {
  return (
    <div>
      {teamList.map(({imgCrest,tla}) => (
        <Item key={tla} tla={tla} img={imgCrest}/>
      ) )}
    </div>
  )
}