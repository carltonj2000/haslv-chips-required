export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <h1>HASLV Chips Required</h1>
    <a href="imagesTif.zip">Zip of all images in TIF format</a>
    <br />
    <a href="imagesJpg.zip">Zip of all images in JPG format</a>
    <br />
    <h3>Total Chips Required =&gt; {data.total}</h3>
    <a href="./imgs/Bonanza Trail.jpg">40 Bonanza Tail - Label Only</a>
    <br />
    <a href="">20 Chip Master - Image TBD</a>
    <br />
    <table>
      <thead>
        <tr>
          <th>Qty</th>
          <th>Image</th>
          <th>Chip</th>
        </tr>
      </thead>
      <tbody>
        {data.images.map((d, k) =>
          d.qty ? (
            <tr key={k}>
              <td>{d.qty}</td>
              <td>
                <a href={`./imgs/${d.name}`}>
                  <img src={`./imgs/${d.name}`} width="50" height="50" />
                </a>
              </td>
              <td>{d.name}</td>
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  </>
);
