import React, {useState, useEffect} from 'react';

function DevForm({onSubmit}){

    const [github_usarname, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(
          (position) =>{
            const {latitude, longitude} = position.coords;
    
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (err)=>{
            console.log(err);
          },
          {
            timeout: 30000,
          }
        );
      }, []);

      async function handleSubmit(e){
          e.precentDefault();

          await onSubmit({
            github_usarname,
            techs,
            latitude,
            longitude
          });

          setGithubUsername('');
          setTechs('');
      }

    return(
        <form onSubmit={handleSubmit}>
        <div className="input-block">
        <label htmlFor="github_username">GitHub Username</label>
        <input type="text" name="github_username" id="github_username" required value={github_usarname} onChange={e => setGithubUsername(e.target.value)}/>
        </div>

        <div className="input-block">
        <label htmlFor="techs">Tecnologies</label>
        <input type="text" name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}/>
        </div>
        <div className="input-group">
        <div className="input-block">
        <label htmlFor="latitude">Latitude</label>
        <input type="text" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}/>
        </div>
        <div className="input-block">
        <label htmlFor="longitude">Longitude</label>
        <input type="text" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}/>
        </div>
        </div>

      <button type="submit">Salvar</button>
      </form>
    );
}

export default DevForm;